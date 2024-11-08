
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxoqqygskpfaflofaanm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4b3FxeWdza3BmYWZsb2ZhYW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwMTYxNjUsImV4cCI6MjA0NjU5MjE2NX0.wqmX69QT6Q93ORbt928OqJBbxzQXaeTNnODLdAicQpc"
const supabase = createClient(supabaseUrl, supabaseKey)

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}