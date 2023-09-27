import { Spell } from '$lib/interfaces';
import { supabase } from '$lib/server/supabaseClient';

interface CharacterSpell extends Spell {
  character_id: string;
  spell_id: string;
  prepared: boolean;
}

export const load = async () => {
  const { data } = await supabase
    .rpc('character_spells')
    .eq('character_id', 1)
    .neq('level', 'Cantrip')
    .order('name')
    .returns<CharacterSpell[]>();
  return {characterSpells: data ?? [] };
};