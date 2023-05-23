import { createClient } from '../../deps.ts';
import { Database } from '../../lib/database.types.ts';

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? '';
const supabaseAnonKey = Deno.env.get('ANON_KEY') ?? '';

export const supabase = createClient<Database>(
	supabaseUrl,
	supabaseAnonKey,
);
