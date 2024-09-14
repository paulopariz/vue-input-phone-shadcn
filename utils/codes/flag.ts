export const flag = `<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  country: string;
  countryName?: string;
}

const props = defineProps<Props>();

const flagUrl = computed(() => {
  return \`https://flagcdn.com/w40/\${props.country.toLowerCase()}.png\`;
});
</script>

<template>
  <div>
    <span class="flex h-3.5 w-5 overflow-hidden rounded-[2px] bg-foreground/20">
      <img
        v-if="props.country"
        :src="flagUrl"
        :alt="props.countryName"
        :title="props.countryName"
        class="w-full"
      />
    </span>
  </div>
</template>
`;
