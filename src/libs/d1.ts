export type TableSpec = {
  columns: string[];
  json?: string[];
  bool?: string[];
  orderBy?: string;
};

export const tables: Record<string, TableSpec> = {
  projects: {
    columns: [
      'title',
      'description',
      'technologies',
      'github_url',
      'live_url',
      'image_url',
      'is_featured',
      'start_date',
      'end_date',
      'category',
    ],
    json: ['technologies'],
    bool: ['is_featured'],
    orderBy: 'created_at DESC',
  },
  case_studies: {
    columns: [
      'title',
      'client',
      'duration',
      'technologies',
      'challenge',
      'solution',
      'results',
      'is_featured',
    ],
    json: ['technologies', 'results'],
    bool: ['is_featured'],
    orderBy: 'created_at DESC',
  },
  experiences: {
    columns: [
      'title',
      'company',
      'start_date',
      'end_date',
      'location',
      'description',
      'responsibilities',
      'technologies',
    ],
    json: ['responsibilities', 'technologies'],
    orderBy: '(end_date IS NULL) DESC, end_date DESC, start_date DESC',
  },
  testimonials: {
    columns: ['name', 'role', 'company', 'image', 'rating', 'content'],
    orderBy: 'created_at DESC',
  },
  blog_posts: {
    columns: [
      'title',
      'slug',
      'excerpt',
      'content',
      'tags',
      'read_time',
      'meta_title',
      'meta_description',
      'published',
      'featured',
      'published_at',
    ],
    json: ['tags'],
    bool: ['published', 'featured'],
    orderBy: '(published_at IS NULL), published_at DESC, created_at DESC',
  },
  about_content: {
    columns: [
      'description_1',
      'description_2',
      'skills_categories',
      'stats_years',
      'stats_projects',
      'stats_users',
      'location',
      'remote_status',
      'looking_for',
    ],
    json: ['skills_categories', 'looking_for'],
  },
  home_content: {
    columns: [
      'title',
      'meta_description',
      'meta_keywords',
      'hero_heading',
      'hero_subheading',
      'hero_cta_text',
      'hero_cta_link',
      'contact_email',
      'contact_phone',
      'linkedin_url',
      'github_url',
      'resume_text',
      'resume_url',
    ],
  },
};

export const getDb = (locals: App.Locals): D1Database => locals.runtime.env.DB;

type Row = Record<string, unknown>;

export const decodeRow = <T extends Row | null>(spec: TableSpec, row: T): T => {
  if (!row) return row;
  const decoded: Row = { ...row };
  for (const field of spec.json ?? []) {
    if (typeof decoded[field] === 'string') {
      try {
        decoded[field] = JSON.parse(decoded[field] as string);
      } catch {
        decoded[field] = [];
      }
    } else if (decoded[field] == null) {
      decoded[field] = [];
    }
  }
  for (const field of spec.bool ?? []) {
    if (field in decoded) {
      decoded[field] = Boolean(decoded[field]);
    }
  }
  return decoded as T;
};

export const decodeRows = (spec: TableSpec, rows: Row[]): Row[] =>
  rows.map(row => decodeRow(spec, row));

export const encodeBody = (spec: TableSpec, body: Row) => {
  const columns: string[] = [];
  const values: unknown[] = [];
  for (const column of spec.columns) {
    if (!(column in body)) continue;
    let value = body[column];
    if (spec.json?.includes(column)) {
      value = JSON.stringify(value ?? []);
    } else if (spec.bool?.includes(column)) {
      value = value ? 1 : 0;
    } else if (value === undefined) {
      value = null;
    }
    columns.push(column);
    values.push(value);
  }
  return { columns, values };
};

export const insertRow = async (
  db: D1Database,
  table: string,
  body: Row,
  extra: Row = {}
) => {
  const spec = tables[table];
  const { columns, values } = encodeBody(spec, body);
  for (const [column, value] of Object.entries(extra)) {
    columns.push(column);
    values.push(value);
  }
  const id = typeof body.id === 'string' ? body.id : crypto.randomUUID();
  columns.push('id');
  values.push(id);
  const placeholders = columns.map(() => '?').join(', ');
  const row = await db
    .prepare(
      `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders}) RETURNING *`
    )
    .bind(...values)
    .first();
  return decodeRow(spec, row as Row | null);
};

export const updateRow = async (
  db: D1Database,
  table: string,
  id: string,
  body: Row,
  extra: Row = {}
) => {
  const spec = tables[table];
  const { columns, values } = encodeBody(spec, body);
  for (const [column, value] of Object.entries(extra)) {
    columns.push(column);
    values.push(value);
  }
  if (!columns.length) return null;
  const assignments = columns.map(column => `${column} = ?`).join(', ');
  const row = await db
    .prepare(
      `UPDATE ${table} SET ${assignments}, updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now') WHERE id = ? RETURNING *`
    )
    .bind(...values, id)
    .first();
  return decodeRow(spec, row as Row | null);
};

export const deleteRow = async (db: D1Database, table: string, id: string) => {
  const result = await db
    .prepare(`DELETE FROM ${table} WHERE id = ?`)
    .bind(id)
    .run();
  return result.meta.changes > 0;
};

export const getRowById = async (db: D1Database, table: string, id: string) => {
  const row = await db
    .prepare(`SELECT * FROM ${table} WHERE id = ?`)
    .bind(id)
    .first();
  return decodeRow(tables[table], row as Row | null);
};

export const listRows = async (db: D1Database, table: string) => {
  const spec = tables[table];
  const order = spec.orderBy ? ` ORDER BY ${spec.orderBy}` : '';
  const { results } = await db.prepare(`SELECT * FROM ${table}${order}`).all();
  return decodeRows(spec, results as Row[]);
};

export const getSingleton = async (db: D1Database, table: string) => {
  const row = await db.prepare(`SELECT * FROM ${table} LIMIT 1`).first();
  return decodeRow(tables[table], row as Row | null);
};

export const upsertSingleton = async (
  db: D1Database,
  table: string,
  body: Row
) => {
  const existing = await db
    .prepare(`SELECT id FROM ${table} LIMIT 1`)
    .first<{ id: string }>();
  if (existing) {
    return updateRow(db, table, existing.id, body);
  }
  return insertRow(db, table, body);
};
