import { supabase } from "../../Shared/API/DataBase/api.js";

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select("*")

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}

export async function getProductsWhere(column, value) {
  const { data, error } = await supabase
    .from('products')
    .select("*")
    .eq(column, value)

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }
  return data;
}

