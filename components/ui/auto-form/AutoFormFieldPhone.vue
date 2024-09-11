<script setup lang="ts">
import { PhoneInput } from "../phone";
import type { FieldProps } from "./interface";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const phone = ref("");

defineOptions({
  inheritAttrs: false,
});

defineProps<FieldProps>();
</script>

<template>
  <FormField v-slot="slotProps" :name="fieldName">
    <FormItem v-bind="$attrs" class="flex flex-col items-start">
      <FormLabel class="text-left">Phone Number</FormLabel>
      <FormControl class="w-full">
        <slot v-bind="slotProps">
          <PhoneInput
            v-model="phone"
            v-bind="{ ...slotProps.componentField, ...config?.inputProps }"
          />
        </slot>
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
