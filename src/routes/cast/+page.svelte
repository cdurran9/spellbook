<script lang="ts">
  import Spell from '$lib/components/Spell.svelte';
  import SpellSlots from '$lib/components/SpellSlots.svelte';

  export let data;

  let loading = false;

  $: spellLevels = [
    { name: '1st', total: 4, current: data.character.slots_1st },
    { name: '2nd', total: 3, current: data.character.slots_2nd },
    { name: '3rd', total: 3, current: data.character.slots_3rd },
  ];

  const handleChange = async (spellLevel: string, newValue: number) => {
    loading = true;
    await fetch('/api/cast', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level: spellLevel,
        newValue: newValue,
      }),
    });
    data.character[`slots_${spellLevel}`] = newValue;
    loading = false;
  };
</script>

<div class="flex justify-between">
  {#each spellLevels as level}
    <SpellSlots
      {loading}
      totalSlots={level.total}
      unspentSlots={level.current}
      level={level.name}
      onChange={(newVal) => handleChange(level.name, newVal)}
    />
  {/each}
</div>

{#each data.characterSpells as spell}
  <Spell {spell} />
{/each}
