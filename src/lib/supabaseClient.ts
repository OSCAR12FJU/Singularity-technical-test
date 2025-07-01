import { createClient } from "@supabase/supabase-js";


const supabaseUrl= import.meta.env.VITE_API_URL_SUPABASE;
const supabaseKey= import.meta.env.VITE_API_KEY_SUPABASE;

export const supabase = createClient(supabaseUrl, supabaseKey);