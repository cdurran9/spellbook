import { supabase } from '$lib/server/supabaseClient.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const requestData = await request.json();
  const columnName = `slots_${requestData.level}`
  console.log({ [columnName]: requestData.newValue });
  const { error } = await supabase
    .from('characters')
    .update({ [columnName]: requestData.newValue })
    .eq('id', 1);
  return json({ status: error ? 500 : 201 });
}