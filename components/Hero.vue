<script setup lang="ts">
function scrollToDocumentation() {
  const section = document.getElementById("docs");

  if (!section) return;
  section.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <header class="h-screen">
    <section class="grid h-full place-content-center">
      <div class="grid gap-3">
        <div class="grid gap-1.5">
          <p class="text-xs font-medium tracking-wider">✨ Open source</p>
        </div>
        <h1
          class="my-2 inline-flex animate-text-gradient items-center justify-between gap-2 text-nowrap bg-gradient-to-r from-[hsl(var(--foreground))] via-[#6e6e6e] to-[hsl(var(--foreground))] bg-[200%_auto] bg-clip-text text-center text-5xl font-bold tracking-wider text-transparent max-md:text-wrap max-md:text-start max-sm:text-3xl"
        >
          Vue Input Phone Shadcn
        </h1>
      </div>
      <p class="tracking-wider text-muted-foreground max-sm:text-sm">
        The Vue Input Phone Shadcn library is an open source project, based on Shadcn. It offers an
        excellent component for entering phone numbers, supporting 194 countries, with automatic
        formatting and advanced validation to detect invalid formats. Plus, it's highly
        customizable.
      </p>
      <div class="mt-7 flex justify-between gap-2">
        <div class="flex justify-between gap-2">
          <Button class="flex items-center gap-1" @click="scrollToDocumentation">
            Docs <PhosphorIconCaretRight weight="bold" />
          </Button>

          <NuxtLink href="https://github.com/paulopariz/vue-input-phone-shadcn" target="_blank">
            <Button variant="secondary" class="flex items-center gap-2">
              Github
              <PhosphorIconGithubLogo weight="bold" />
            </Button>
          </NuxtLink>
        </div>
        <Theme />
      </div>
    </section>
  </header>
</template>
