//@ts-ignore
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ilojbumfvgjyaumjmcwy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsb2pidW1mdmdqeWF1bWptY3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDk2MTcsImV4cCI6MjAyNjAyNTYxN30.zZZptKUQcGsGg_0oy_zC_VwbADoLaD7bKNBsn-iIPjo'
)
export { supabase }
