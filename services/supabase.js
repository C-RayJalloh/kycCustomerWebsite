/* eslint-disable no-undef */
// require("dotenv").config();

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ciowjjxvtgwtafwrmljg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpb3dqanh2dGd3dGFmd3JtbGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4OTQ4MzcsImV4cCI6MjA0NDQ3MDgzN30.xiYDK75IrVNUvkbfw3bYVama-D_Fsq7IbP962XdGPmM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
