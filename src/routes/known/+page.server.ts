import { supabase } from '$lib/server/supabaseClient';
import type { Spell } from '$lib/interfaces';

export const load = async () => {
  const { data: spellData } = await supabase
    .from('spells')
    .select()
    .in('level', ['Cantrip', '1st', '2nd', '3rd'])
    .order('name');
  const { data: knownSpells } = await supabase
    .from('character_spells')
    .select('spell_id')
    .eq('character_id', 1);
  return {spells: spellData as Spell[], knownSpells: knownSpells?.map(x => x.spell_id) };
};