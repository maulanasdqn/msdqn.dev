import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://btdmfdxfqwhxnexgtxxd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZG1mZHhmcXdoeG5leGd0eHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMDY4MTQsImV4cCI6MjA2NjU4MjgxNH0.P0cDn1kBlF1hw8Z5Yd59LZl_CMsBnI58kzVkjDMchF4",
  {
    auth: {
      flowType: "pkce"
    }
  }
);

export { supabase as s };
