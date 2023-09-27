<script lang="ts">
  import { clamp } from '$lib/utils/clamp';

  export let totalSlots: number;
  export let unspentSlots: number;
  export let level: string;
  export let onChange = (val: number) => {};

  $: slotsArray = Array.from(Array(totalSlots)).map((_, i) =>
    i <= unspentSlots - 1 ? true : false
  );

  const onIncrease = () => {
    onChange?.(clamp(unspentSlots + 1, 0, totalSlots));
  };

  const onDecrease = () => {
    onChange?.(clamp(unspentSlots - 1, 0, totalSlots));
  };
</script>

<div class="root flex mb-1">
  <div class="widget bg-slate-800 rounded p-1">
    <h5 class="text-center">{level}</h5>
    <div class="flex flex-wrap justify-around">
      {#each slotsArray as slot}
        <div class="pip border-cyan-400 border" class:bg-cyan-400={slot} />
      {/each}
    </div>
  </div>
  <div class="flex flex-col">
    <button on:click={onIncrease}>🔼</button>
    <button on:click={onDecrease}>🔽</button>
  </div>
</div>

<style>
  .root {
    flex: 0 0 auto;
  }
  .widget {
    height: 48px;
    width: 48px;
  }
  .root .pip {
    width: 8px;
    height: 8px;
  }
</style>
