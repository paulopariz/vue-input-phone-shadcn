<template>
  <header class="h-[80dvh]">
    <section class="grid h-full place-content-center">
      <div class="grid gap-3">
        <div class="grid gap-1.5">
          <p class="text-xs font-medium tracking-wider">
            📅 Last update:
            <span class="font-normal italic text-muted-foreground"> Sep 9, 2024 </span>
          </p>
          <p class="text-xs font-medium tracking-wider">✨ Open source</p>
        </div>
        <h1
          class="my-2 inline-flex animate-text-gradient items-center justify-between gap-2 text-nowrap bg-gradient-to-r from-[hsl(var(--foreground))] via-[#6e6e6e] to-[hsl(var(--foreground))] bg-[200%_auto] bg-clip-text text-center text-5xl font-bold tracking-wider text-transparent"
        >
          Vue Input Phone Shadcn
        </h1>
      </div>
      <p class="tracking-wider text-muted-foreground">
        The Vue Input Phone Shadcn library is an open source project, based on Shadcn. It offers an
        excellent component for entering phone numbers, supporting 194 countries, with automatic
        formatting and advanced validation to detect invalid formats. Plus, it's highly
        customizable.
      </p>
      <div class="mt-7 flex justify-between gap-2">
        <div class="flex justify-between gap-2">
          <Button class="flex items-center gap-1">
            Docs <PhosphorIconCaretRight weight="bold" />
          </Button>
          <Button variant="secondary" class="flex items-center gap-2">
            Github
            <PhosphorIconGithubLogo weight="bold" />
          </Button>
        </div>
        <Theme />
      </div>
    </section>
  </header>
</template>
