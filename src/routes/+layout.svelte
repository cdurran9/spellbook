<script>
  // @ts-nocheck

  import '../app.css';
  import { page } from '$app/stores';
  import { onNavigate } from '$app/navigation';
  import Icon from '$lib/components/Icon.svelte';

  let navIsOpen = false;

  onNavigate((navigation) => {
    //@ts-ignore
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      //@ts-ignore
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<nav
  class="sticky top-0 flex flex-col gap-2 justify-center items-start p-2 shadow-md dark:bg-slate-900 dark:text-slate-50"
>
  <button class="bg-transparent" on:click={() => (navIsOpen = !navIsOpen)}
    ><Icon
      name={navIsOpen ? 'close' : 'hamburger'}
      width={32}
      height={32}
      class="stroke-slate-50 fill-slate-50"
    /></button
  >
  <div
    class="flex flex-col gap-2 transition-all duration-300"
    class:max-h-32={navIsOpen}
    class:max-h-0={!navIsOpen}
    class:scale-y-0={!navIsOpen}
  >
    <a
      aria-current={$page.url.pathname === '/known' ? 'page' : undefined}
      class="text-lg"
      class:border-b-2={$page.url.pathname === '/known'}
      href="/known">Learn</a
    >
    <a
      aria-current={$page.url.pathname === '/prepare' ? 'page' : undefined}
      class="text-lg"
      class:border-b-2={$page.url.pathname === '/prepare'}
      href="/prepare">Prepare</a
    >
    <a
      aria-current={$page.url.pathname === '/cast' ? 'page' : undefined}
      class="text-lg"
      class:border-b-2={$page.url.pathname === '/cast'}
      href="/cast">Cast</a
    >
  </div>
</nav>

<div class="px-4 dark:bg-slate-900 dark:text-slate-50 body-content">
  <slot />
</div>

<style>
  .body-content {
    min-height: calc(100vh - 46px);
  }
</style>
