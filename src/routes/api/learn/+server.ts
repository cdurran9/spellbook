import { supabase } from '$lib/server/supabaseClient.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const requestData = await request.json();
  if (requestData.setKnown) {
    const { error } = await supabase
      .from('character_spells')
      .insert({ character_id: 1, spell_id: requestData.spellId });
    return json({ id: requestData.spellId, status: error ? 500 : 201 });
  } else {
    const { error } = await supabase
      .from('character_spells')
      .delete()
      .eq('character_id', 1)
      .eq('spell_id', requestData.spellId);
    return json({ id: requestData.spellId, status: error ? 500 : 201 });
  }
}