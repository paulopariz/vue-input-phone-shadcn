<script setup lang="ts">
import { z } from "zod";
import { AutoForm } from "@/components/ui/auto-form";
import { toast } from "vue-sonner";

interface ISchema {
  phone: string;
}

const formSchema = z.object({
  phone: z.string().refine((value) => !value.includes("invalid"), {
    message: "Invalid phone number",
  }),
});

function onSubmit(values: ISchema) {
  const custom = defineComponent({
    setup() {
      return () =>
        h("pre", {
          innerHTML: JSON.stringify(values, null, 2),
        });
    },
  });

  toast(markRaw(custom));
}
</script>

<template>
  <AutoForm
    class="w-full space-y-3"
    :schema="formSchema"
    :field-config="{
      phone: {
        component: 'phone',
      },
    }"
    @submit="onSubmit"
  >
    <Button type="submit" class="float-end"> Send </Button>
  </AutoForm>
</template>
