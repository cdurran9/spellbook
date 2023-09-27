import type { Spell } from "$lib/interfaces";

const order = ['Cantrip', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];

export const sortByLevel = (spellA: Spell, spellB: Spell, ascending: boolean = false) => {
  return ascending
    ? order.indexOf(spellA.level) - order.indexOf(spellB.level)
    : order.indexOf(spellB.level) - order.indexOf(spellA.level);
}