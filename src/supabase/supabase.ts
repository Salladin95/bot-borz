import { Database } from '../../lib/database.types.ts';
import { config } from '../../config.ts';
import { createClient } from '../../deps.ts';

export const supabase = createClient<Database>(
	config.supabaseUrl ?? '',
	config.anonKey ?? '',
);
