//import { createClient } from '@supabase/supabase-js';
//here one common mistake is that
//createMiddlewareClient is from auth helpers package in middleware and in supabase.ts we are using supabase for createClient
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// export const supabase = createClientComponentClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
//THIS IS SOMETHING ACCESSIBLE TO PUBLIC USERS
// export const supabaseAdmin = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
// );  //THIS IS SOMETHING THAT WE NEED TO USE WHEN A ADMIN IS USING OUR APP
export const supabase = createClientComponentClient(); //now we dont need keys in the params it will take from the env
