<template>
  <main class="container max-w-screen-xl px-32 max-lg:px-3">
    <slot />
  </main>

  <footer class="relative mt-20 flex !h-20 items-center justify-center overflow-hidden border-t">
    <div
      class="absolute -top-44 left-1/2 -z-10 size-64 -translate-x-1/2 rounded-full bg-border blur-2xl"
    />

    <p class="flex gap-1 text-sm">
      Created by:
      <NuxtLink
        target="_blank"
        href="https://github.com/paulopariz"
        class="flex items-center font-medium underline"
      >
        paulopariz
        <PhosphorIconArrowUpRight />
      </NuxtLink>
    </p>
  </footer>
</template>
