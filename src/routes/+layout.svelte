<script>
  import '../app.css';
  import { page } from '$app/stores';
</script>

<nav
  class="sticky top-0 flex gap-2 justify-center p-2 shadow-md dark:bg-slate-900 dark:text-slate-50"
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
</nav>

<div class="px-4 dark:bg-slate-900 dark:text-slate-50 body-content">
  <slot />
</div>

<style>
  .body-content {
    min-height: calc(100vh - 46px);
  }
</style>
