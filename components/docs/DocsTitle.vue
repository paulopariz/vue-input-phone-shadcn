<script setup lang="ts">
interface IProps {
  position: string;
}

const { position } = defineProps<IProps>();
</script>

<template>
  <span
    class="absolute -left-[46px] flex size-7 items-center justify-center rounded-full bg-border font-medium max-sm:hidden"
  >
    {{ position }}
  </span>
  <h2 class="text-2xl font-medium">
    <span class="sm:hidden">{{ position }} - </span>
    <slot />
  </h2>
</template>
