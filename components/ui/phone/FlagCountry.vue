<script setup lang="ts">
interface Props {
  country: string;
}

const props = defineProps<Props>();

const flag = computed(() => {
  return `https://flagcdn.com/w40/${props.country.toLowerCase()}.png`;
});
</script>

<template>
  <div>
    <span class="flex h-3.5 w-5 overflow-hidden rounded-[2px]">
      <img
        v-if="props.country"
        :src="flag"
        :alt="`Flag of ${props.country}`"
        :title="props.country"
        class="h-3.5 w-5"
      />
    </span>
  </div>
</template>
