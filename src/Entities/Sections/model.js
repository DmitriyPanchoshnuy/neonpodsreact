import { supabase } from "../../Shared/API/DataBase/api.js";

export async function getSections() {
  const { data, error } = await supabase
    .from('sections')
    .select('*');
  
    if (error) {
      console.error('Error fetching clients', error);
      return [];
    }
    return data;
}

export async function getSectionsWhere(column, value) {
  const { data, error } = await supabase
    .from('sections')
    .select('*')
    .eq(column, value)
  
    if (error) {
      console.error('Error fetching clients', error);
      return [];
    }
    return data;
}
