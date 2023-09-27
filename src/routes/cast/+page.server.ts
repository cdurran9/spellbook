import { Spell } from '$lib/interfaces';
import { supabase } from '$lib/server/supabaseClient';
import { sortByLevel } from '$lib/utils/sortByLevel';

interface CharacterSpell extends Spell {
  character_id: string;
  spell_id: string;
  prepared: boolean;
}

export const load = async () => {
  const { data } = await supabase
    .rpc('character_spells')
    .eq('character_id', 1)
    .or('prepared.eq.true,level.eq.Cantrip')
    .order('name')
    .returns<CharacterSpell[]>();
  const { data: slotData } = await supabase
    .from('characters')
    .select()
    .eq('id', 1);
  return {characterSpells: data?.sort((a, b) => sortByLevel(a, b, true)) ?? [], character: slotData?.at(0) };
};