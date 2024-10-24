/* eslint-disable no-undef */
// require("dotenv").config();

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.DB_URL;
const supabaseKey = import.meta.env.DB;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
