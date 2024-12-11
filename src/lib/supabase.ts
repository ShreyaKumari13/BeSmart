import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://efmwpbbtglmvvhueadku.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmbXdwYmJ0Z2xtdnZodWVhZGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4OTI0NzcsImV4cCI6MjA0OTQ2ODQ3N30.vNxhHKfnEP8mMHKEZTVaVMK3B8_8OAnOqqbIzB5THtY'

export const supabase = createClient(supabaseUrl, supabaseKey)
