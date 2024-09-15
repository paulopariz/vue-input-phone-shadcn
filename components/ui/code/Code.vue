<script setup lang="ts">
import { highlightCode } from "~/composables/useCode";
import { type ICode } from "./index";
import { onMounted, useTemplateRef } from "vue";

const props = defineProps<{
  code: ICode;
}>();

const highlightedCode = ref("");
const checkVisible = ref(false);
const showExpandButton = ref(false);

const mainRef = useTemplateRef("mainRef");

async function setCode() {
  highlightedCode.value = await highlightCode(props.code.code, props.code.lang);
}

function handleCopyClick() {
  if (!props.code.code) return;
  navigator.clipboard.writeText(props.code.code);
  checkVisible.value = true;

  setTimeout(() => {
    checkVisible.value = false;
  }, 3000);
}

function expandContent() {
  showExpandButton.value = false;
  if (!mainRef.value) return;
  mainRef.value.style.maxHeight = "none";
}

onMounted(async () => {
  await setCode();

  if (mainRef.value && mainRef.value.scrollHeight > 400) {
    showExpandButton.value = true;
  }
});
</script>

<template>
  <section class="relative">
    <main
      ref="mainRef"
      class="mt-5 max-h-[400px] w-full overflow-hidden rounded-md border border-[#201f23] transition-all"
    >
      <header
        class="flex h-8 items-center justify-center border-b border-[#201f23] bg-foreground px-2 dark:bg-primary"
      >
        <h1 class="font-medium text-background dark:text-[#06040b]">
          <span class="text-sm tracking-wider"> {{ props.code.label }} </span>
        </h1>
      </header>

      <div class="group relative flex min-h-12 items-center bg-[#06040b] p-4">
        <Button
          variant="ghost"
          class="absolute right-1 top-2 ml-auto size-8 rounded-[6px] p-0 opacity-100 transition-all hover:bg-[#201f23] group-hover:opacity-100"
          @click="handleCopyClick"
        >
          <PhosphorIconCopySimple
            v-if="!checkVisible"
            size="15"
            color="#e2e2e2"
            class="animate-zoom"
          />
          <PhosphorIconCheck v-else size="15" class="animate-zoom text-emerald-400" />
        </Button>
        <div class="mt-0 text-sm">
          <pre v-html="highlightedCode" />
        </div>
      </div>
    </main>
    <div
      v-if="showExpandButton"
      class="expand absolute bottom-[1px] left-1/2 h-12 w-[99%] -translate-x-1/2 rounded-sm"
    >
      <Button
        variant="outline"
        class="m-auto flex items-center gap-1 border border-[#201f23] bg-[#06040b] text-xs text-[#fcfcfd]"
        @click="expandContent"
      >
        View all
        <PhosphorIconCaretDown weight="bold" />
      </Button>
    </div>
  </section>
</template>

<style scoped>
.expand {
  background: rgb(6, 4, 11);
  background: linear-gradient(0deg, rgba(6, 4, 11, 1) 37%, rgba(6, 4, 11, 0) 100%);
}
</style>
