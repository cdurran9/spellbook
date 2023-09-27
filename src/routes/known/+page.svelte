<script lang="ts">
  import Spell from '$lib/components/Spell.svelte';

  export let data;
  let searchTerm: string = '';

  $: spells = data.spells;
  $: filteredData = spells.filter((spell) =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  $: numKnown = data.knownSpells?.length ?? 0;

  const handleClick = async (spellId: string, setKnown: boolean) => {
    const response = await fetch('/api/learn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ spellId, setKnown }),
    });
    const { id } = await response.json();
    if (setKnown) data.knownSpells = [...(data.knownSpells ?? []), id];
    else
      data.knownSpells = [...(data.knownSpells ?? []).filter((x) => x !== id)];
  };

  const resetSearch = () => {
    searchTerm = '';
  };
</script>

<div class="fixed top-0 right-0">{numKnown} known</div>

<div class="flex gap-4 sticky top-[46px] dark:bg-slate-900">
  <input
    type="search"
    class="dark:bg-slate-800 w-full my-2 pl-2"
    bind:value={searchTerm}
  />
  <button on:click={resetSearch}>Clear</button>
</div>
<ul>
  {#each filteredData as spell}
    <li>
      <Spell
        {spell}
        prepared={data.knownSpells?.includes(spell.id)}
        onClick={handleClick}
      />
    </li>
  {/each}
</ul>
