<script setup lang="ts">
interface IProps {
  position: string;
}

const { position } = defineProps<IProps>();
</script>

<template>
  <span
    class="absolute -left-[43px] flex size-7 items-center justify-center rounded-full bg-border font-medium max-sm:hidden"
  >
    {{ position }}
  </span>
  <h2 class="text-2xl font-medium max-sm:text-lg">
    <span class="sm:hidden">{{ position }} - </span>
    <slot />
  </h2>
</template>
