<script setup lang="ts">
import { Separator } from "~/components/ui/separator";
import { Docs, DocsTitle, DocsSubtitle } from "~/components/docs";

import { type ICode, Code } from "~/components/ui/code";

import { install } from "~/utils/codes/install";
import { component } from "~/utils/codes/component";
import { flag } from "~/utils/codes/flag";
import { countries } from "~/utils/codes/countries-json";
import { exportComponent } from "~/utils/codes/export";

import { defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("~/components/Hero.vue"));

const installComponents: ICode = {
  code: install,
  label: "Terminal",
  lang: "zsh",
};

const addComponentPhone: ICode = {
  code: component,
  label: "~/components/phone/Code.vue",
  lang: "vue",
};

const addComponentFlag: ICode = {
  code: flag,
  label: "~/components/phone/FlagCountry.vue",
  lang: "vue",
};

const jsonCountries: ICode = {
  code: countries,
  label: "~/components/phone/countries.ts",
  lang: "typescript",
};

const exportComponentPhone: ICode = {
  code: exportComponent,
  label: "~/components/phone/index.ts",
  lang: "typescript",
};
</script>

<template>
  <Hero />

  <section class="grid gap-28 py-5">
    <div class="grid gap-20">
      <div class="grid gap-5">
        <h1 class="text-3xl font-semibold max-sm:text-xl">Demo</h1>
        <div class="rounded-[var(--radius)] border">
          <div class="m-auto grid h-96 w-2/3 place-items-center px-4 max-sm:h-52 max-sm:w-full">
            <PhoneInput />
          </div>
        </div>
      </div>

      <div class="grid gap-5">
        <div>
          <h1 class="text-3xl font-semibold max-sm:text-xl">Component integrated with AutoForm</h1>
          <p class="mt-1 tracking-wider text-muted-foreground max-sm:text-sm">
            Component integrated with Shadcn's AutoForm, with validation via Zod. To access it,
            <NuxtLink
              class="font-medium underline"
              href="https://github.com/paulopariz/vue-input-phone-shadcn/blob/master/components/ui/auto-form/AutoFormFieldPhone.vue"
              target="_blank"
            >
              click here to access the component.
            </NuxtLink>
            .
          </p>
        </div>
        <div class="rounded-[var(--radius)] border">
          <div class="m-auto grid h-96 w-2/3 place-items-center px-4 max-sm:h-52 max-sm:w-full">
            <ComponentPhoneView />
          </div>
        </div>
      </div>
    </div>

    <Separator />

    <div id="docs">
      <h1 class="mb-6 text-3xl font-semibold max-sm:text-xl">Configure components:</h1>

      <div class="ml-4 mt-12 grid gap-20 border-l pl-8 max-sm:ml-0 max-sm:border-l-0 max-sm:pl-0">
        <Docs>
          <DocsTitle position="1"> Install components </DocsTitle>
          <DocsSubtitle>
            To get started, install the necessary Shadcn components by running the following
            commands in the terminal:
          </DocsSubtitle>
          <Code :code="installComponents" />
        </Docs>

        <Docs>
          <DocsTitle position="2"> Component PhoneInput </DocsTitle>
          <DocsSubtitle>
            In your components folder, create a new subfolder called "phone". Then add a file called
            PhoneInput.vue and insert the following code:
          </DocsSubtitle>
          <Code :code="addComponentPhone" />
        </Docs>

        <Docs>
          <DocsTitle position="3"> Component FlagCountry </DocsTitle>
          <DocsSubtitle>
            Now, create a file called FlagCountry.vue in the phone folder and add the following
            content:
          </DocsSubtitle>
          <Code :code="addComponentFlag" />
        </Docs>

        <Docs>
          <DocsTitle position="4"> Countries </DocsTitle>
          <DocsSubtitle>
            Now let's add the JSON that contains the country information and corresponding phone
            formatting. To do this, create a file called countries.ts:
          </DocsSubtitle>
          <Code :code="jsonCountries" />
        </Docs>

        <Docs>
          <DocsTitle position="5"> Export </DocsTitle>
          <DocsSubtitle>
            Finally, to export the PhoneInput.vue component, create a file called index.ts inside
            the phone folder:
          </DocsSubtitle>
          <Code :code="exportComponentPhone" />
        </Docs>
      </div>
    </div>
  </section>
</template>
