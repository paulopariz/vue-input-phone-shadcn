<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <Hero />

  <section class="grid gap-48">
    <div class="grid gap-10">
      <h1 class="text-3xl font-semibold">Demo:</h1>
      <Separator />
      <div class="m-auto w-1/2">
        <ComponentPhoneView />
      </div>
    </div>
    <div class="grid gap-10">
      <h1 class="text-3xl font-semibold">Configure components:</h1>
      <Separator />
    </div>
  </section>
</template>
