<script setup lang="ts">
interface Props {
  country: string;
}

const { country } = defineProps<Props>();

const flag = computed(() => `https://flagcdn.com/w40/${country.toLowerCase()}.png`);
</script>

<template>
  <div>
    <span class="flex h-3.5 w-5 overflow-hidden rounded-[2px]">
      <img v-if="country" :src="flag" :alt="flag" :title="flag" class="w-full" />
    </span>
  </div>
</template>
