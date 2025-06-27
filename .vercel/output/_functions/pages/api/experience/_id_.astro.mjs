import { s as supabase } from '../../../chunks/supabase_DZJUbGNb.mjs';
export { renderers } from '../../../renderers.mjs';

const GET = async ({ params, cookies }) => {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { data, error } = await supabase.from("experiences").select("*").eq("id", params.id).single();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
};
const PUT = async ({ params, request, cookies }) => {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return new Response("Unauthorized", { status: 401 });
  }
  const body = await request.json();
  const { data, error } = await supabase.from("experiences").update(body).eq("id", params.id).select();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(data[0]), {
    headers: { "Content-Type": "application/json" }
  });
};
const DELETE = async ({ params, cookies }) => {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return new Response("Unauthorized", { status: 401 });
  }
  const { error } = await supabase.from("experiences").delete().eq("id", params.id);
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
