<script lang="ts">
  import Spell from '$lib/components/Spell.svelte';

  export let data;
  const handleClick = async (spellId: string, setPrepared: boolean) => {
    const response = await fetch('/api/prepare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: spellId, setPrepared }),
    });
    const { id } = await response.json();
    data.characterSpells = data.characterSpells.map((spell) => {
      if (spell.spell_id === id) return { ...spell, prepared: setPrepared };
      return spell;
    });
  };
  $: spells = data.characterSpells;
  $: numPrepared = data.characterSpells.filter(
    (spell) => spell.prepared
  ).length;
</script>

<div class="fixed top-0 right-0">{numPrepared} of 10</div>

{#each spells as spell (spell.spell_id)}
  <Spell {spell} prepared={spell.prepared} onClick={handleClick} />
{/each}
