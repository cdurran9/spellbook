import localforage from 'localforage';
import { writable } from 'svelte/store';

const defaultValue: string[] = [];
const initialValue: string[] = await localforage.getItem('preparedSpells') ?? defaultValue;

const preparedSpells = writable<string[]>(initialValue);

preparedSpells.subscribe(async (value: string[]) => {
  await localforage.setItem('preparedSpells', value);
});

export default preparedSpells;