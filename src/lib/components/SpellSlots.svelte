<script lang="ts">
  import { clamp } from '$lib/utils/clamp';

  export let totalSlots: number;
  export let unspentSlots: number;
  export let level: string;
  export let onChange = (val: number) => {};
  export let loading = false;

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
    <div
      class="slot-grid grid justify-center justify-items-center items-center gap-2-px"
    >
      {#each slotsArray as slot}
        <div class="pip border-cyan-400 border" class:bg-cyan-400={slot} />
      {/each}
    </div>
  </div>
  <div class="flex flex-col justify-around">
    <button disabled={loading} on:click={onIncrease}>🔼</button>
    <button disabled={loading} on:click={onDecrease}>🔽</button>
  </div>
</div>

<style>
  .root {
    flex: 0 0 auto;
  }
  .widget {
    width: 48px;
  }
  .root .pip {
    width: 8px;
    height: 8px;
  }

  .slot-grid {
    grid-template: 12px 12px / 12px 12px;
  }
</style>
