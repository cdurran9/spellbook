<script lang="ts">
  import type { Spell } from '$lib/interfaces';
  import { enhance } from '$app/forms';

  export let spell: Spell;
  export let prepared: boolean = false;

  export let onClick: ((id: string, setPrepared: boolean) => void) | undefined =
    undefined;

  const handleToggle = () => {
    onClick?.(spell.id, !prepared);
  };
</script>

<button
  class="text-left mb-2 p-4 shadow-lg dark:bg-slate-800 rounded"
  class:border-green-400={prepared}
  class:border={prepared}
  on:click={handleToggle}
>
  <h5 class="flex justify-between items-center">
    <span class="text-lg">{spell.name}</span>
    <span class="text-xs rounded-full bg-slate-600 p-1">{spell.level}</span>
  </h5>
  <p>
    <span class="me-1.5">Casting Time:</span>{spell.casting_time}
    {#if spell.ritual}
      <span class="italic">(Rit)</span>
    {/if}
  </p>
  <p><span class="me-1.5">Duration:</span>{spell.duration}</p>
  <p><span class="me-1.5">Range:</span>{spell.range}</p>
  <p><span class="me-1.5">Components:</span>{spell.components}</p>
  <p>{spell.text}</p>
  {#if spell.higher_levels}
    <p>
      <span class="me-1.5 font-bold">At Higher Levels:</span
      >{spell.higher_levels}
    </p>
  {/if}
</button>
