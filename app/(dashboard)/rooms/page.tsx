import { createClient } from "@/utils/supabase/server";

export default async function Countries() {
  const supabase = await createClient();
  const { data: rooms } = await supabase.from("rooms").select();
  console.log(rooms);
  return <pre>{JSON.stringify(rooms, null, 2)}</pre>;
}
