export type SpellLevel = 
  | 'Cantrip'
  | '1st'
  | '2nd'
  | '3rd'
  | '4th'
  | '5th'
  | '6th'
  | '7th'
  | '8th'
  | '9th'


export interface Spell {
  name: string;
  source: string;
  level: SpellLevel;
  casting_time: string;
  duration: string;
  school: string;
  range: string;
  components: string;
  text: string;
  higher_levels: string;
  id: string;
  ritual: boolean;
}