import { supabase } from '$lib/server/supabaseClient.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const requestData = await request.json();
  const { error } = await supabase
    .from('character_spells')
    .update({ prepared: requestData.setPrepared })
    .eq('character_id', 1)
    .eq('spell_id', requestData.id);
  return json({ id: requestData.id, status: error ? 500 : 201 });
}