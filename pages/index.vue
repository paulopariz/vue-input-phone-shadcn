<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { type ICode, Code } from "~/components/ui/code";

import { install } from "~/utils/codes/install";
import { component } from "~/utils/codes/component";
import { flag } from "~/utils/codes/flag";
import { countries } from "~/utils/codes/countries";
import { exportComponent } from "~/utils/codes/export";

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
    <div>
      <h1 class="mb-6 text-3xl font-semibold">Demo:</h1>
      <div class="m-auto w-1/2">
        <ComponentPhoneView />
      </div>
    </div>

    <Separator />

    <div>
      <h1 class="mb-6 text-3xl font-semibold">Configure components:</h1>

      <div class="grid gap-20">
        <div>
          <h2>
            <span class="font-semibold"> One - </span> install the necessary Shadcn components:
          </h2>
          <Code :code="installComponents" />
        </div>

        <div>
          <h2>
            <span class="font-semibold"> Two - </span> In your components folder, create a new
            subfolder called "phone". Then add a file called PhoneInput.vue and insert the following
            code:
          </h2>
          <Code :code="addComponentPhone" />
        </div>

        <div>
          <h2>
            <span class="font-semibold"> Three - </span> Now, create a file called FlagCountry.vue
            and add the following content:
          </h2>
          <Code :code="addComponentFlag" />
        </div>

        <div>
          <h2>
            <span class="font-semibold"> Four - </span> Now let's add the JSON that contains the
            country information and corresponding phone formatting. To do this, create a file called
            countries.ts:
          </h2>
          <Code :code="jsonCountries" />
        </div>

        <div>
          <h2>
            <span class="font-semibold"> Five - </span> Finally, to export the PhoneInput.vue
            component, create a file called index.ts inside the phone folder:
          </h2>
          <Code :code="exportComponentPhone" />
        </div>
      </div>
    </div>
  </section>
</template>
