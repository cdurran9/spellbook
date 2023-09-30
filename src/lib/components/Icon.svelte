<script>
  export let width = 32;
  export let height = 32;
  export let name = '';

  const icons = [
    {
      name: 'hamburger',
      box: 50,
      svg: `<path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/>`,
    },
    {
      name: 'close',
      box: 50,
      svg: `<path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>`,
    },
  ];
  $: displayIcon = icons.find(
    (x) => x.name.toLowerCase() === name.toLowerCase()
  );
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  {width}
  {height}
  class={$$restProps.class}
  viewBox="0 0 {displayIcon?.box} {displayIcon?.box}"
>
  {@html displayIcon?.svg}
</svg>
