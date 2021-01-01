<script>
  export let fill = '#ebebeb'
</script>

<svg
  viewBox='0 0 36 36'
  x='0%' y='0%' width='100%' height='100%' 
  fillRule='evenodd'
  clipRule='evenodd'
  strokeLinejoin='round'
  strokeMiterlimit={2}
>
  <path fill='none' d='M0 0H36V36H0z' />
  <path d='M18 0l15.588 9v18L18 36 2.412 27V9L18 0z' {fill} />
  <slot></slot>
</svg>