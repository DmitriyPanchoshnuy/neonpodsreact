import { supabase } from "../../Shared/API/DataBase/api.js";

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}

export async function getCategoriesWhere(column, value) {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq(column, value)

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}


