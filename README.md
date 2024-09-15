
# Phone Input Component Documentation

## 1. Configure components

### 1.1 Install components

To get started, install the necessary Shadcn components by running the following commands in the terminal:

```bash
npx shadcn-vue@latest add button
npx shadcn-vue@latest add input
npx shadcn-vue@latest add command
npx shadcn-vue@latest add popover
```

## 2. Component `PhoneInput`

In your `components` folder, create a new subfolder called `phone`. Then add a file called `PhoneInput.vue` and insert the following code:

```ts
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandInput,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import FlagCountry from "./FlagCountry.vue";

import { CaretSortIcon, CheckIcon } from "@radix-icons/vue";

import { countriesByContinent, type ICountry } from "./countries";
import { vMaska } from "maska";

const props = defineProps<{
  modelValue?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultCountry?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const allCountries = computed(() => countriesByContinent);
const open = ref(false);
const phoneNumber = ref(props.modelValue || "");

const languageToCountry: Record<string, string> = {
  "pt-BR": "BR",
  "fr-FR": "FR",
  fr: "FR",
  "it-IT": "IT",
  it: "IT",
  "de-DE": "DE",
  de: "DE",
  "es-ES": "ES",
  es: "ES",
  "ja-JP": "JP",
  ja: "JP",
  "en-US": "US",
  en: "US",
};

function findCountry(countryCode: string) {
  const allContinents = Object.values(allCountries.value);
  for (const continent of allContinents) {
    const foundByCode = continent.find((country) => country.code === countryCode);
    if (foundByCode) return foundByCode;
  }
  return null;
}

const countryCode = getCountryCodeFromLanguage(navigator.language);
const countrySelected = ref(findCountry(countryCode));

function getCountryCodeFromLanguage(language: string): string {
  return props.defaultCountry || languageToCountry[language] || "US";
}

function selectedCountry(data: ICountry) {
  if (props.disabled) return;
  phoneNumber.value = "";
  countrySelected.value = data;
  open.value = false;
}

watch(phoneNumber, (value) => {
  if (props.disabled) return;
  emit(
    "update:modelValue",
    value.length === countrySelected.value?.mask.length ? value : value + "invalid"
  );
});
</script>

<template>
  <Popover v-model:open="open">
    <div class="flex w-full items-center">
      <PopoverTrigger as-child class="border-r-0" :disabled="props.disabled">
        <Button
          variant="outline"
          role="combobox"
          :aria-expanded="open"
          class="flex items-center gap-2 rounded-r-none"
        >
          <FlagCountry :country="String(countrySelected?.code)" />
          <CaretSortIcon class="size-4.5 -mr-2 opacity-70" />
        </Button>
      </PopoverTrigger>

      <Input
        v-model="phoneNumber"
        v-maska
        type="text"
        class="rounded-l-none"
        :disabled="props.disabled"
        :placeholder="props.placeholder || countrySelected?.mask.replace(/#/g, '0')"
        :data-maska="countrySelected ? countrySelected.mask : ''"
      />
    </div>

    <PopoverContent align="start" class="w-44 p-0">
      <Command>
        <CommandInput class="h-9" placeholder="Search country..." />
        <CommandEmpty>No country found.</CommandEmpty>

        <CommandList class="list max-h-56">
          <CommandGroup
            v-for="(countries, continent) in countriesByContinent"
            :key="continent"
            :heading="continent"
          >
            <CommandItem
              v-for="country in countries"
              :key="country.code"
              :value="country.code"
              class="flex items-center gap-3"
              :class="{ 'bg-accent/30': country.code === countrySelected?.code }"
              :title="country.name"
              @select="selectedCountry(country)"
            >
              <FlagCountry :country="country.code" />
              <p class="max-w-full overflow-hidden text-ellipsis text-nowrap">
                {{ country.name }}
              </p>

              <div v-if="country.code === countrySelected?.code" class="ml-auto">
                <CheckIcon class="text-foreground" />
              </div>
            </CommandItem>
            <CommandSeparator v-if="continent !== 'North America'" />
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
```

## 3. Component `FlagCountry`

Now, create a file called `FlagCountry.vue` in the `phone` folder and add the following content:

```ts
<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  country: string;
  countryName?: string;
}

const props = defineProps<Props>();

const flagUrl = computed(() => {
  return `https://flagcdn.com/w40/${props.country.toLowerCase()}.png`;
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
```

## 4. Countries

Now let's add the JSON that contains the country information and corresponding phone formatting. To do this, create a file called `countries.ts`:

```ts
type Continent = "Africa" | "Asia" | "Europe" | "Oceania" | "South America" | "North America";

export interface ICountry {
  code: string;
  name: string;
  ddd: string;
  mask: string;
}

const countries: Record<Continent, ICountry[]> = {
  Africa: [
    { name: "Algeria", ddd: "+213", code: "DZ", mask: "+213 ### ### ###" },
    { name: "Angola", ddd: "+244", code: "AO", mask: "+244 ### ### ###" },
    // Other countries...
  ],
  // Other continents...
};

function sortCountriesByName(countries: ICountry[]): ICountry[] {
  return countries.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const countriesByContinent = Object.keys(countries).reduce(
  (sorted, continent) => {
    const continentKey = continent as Continent;
    sorted[continentKey] = sortCountriesByName(countries[continentKey]);
    return sorted;
  },
  {} as Record<Continent, ICountry[]>
);

export { countriesByContinent };
```

## 5. Export

Finally, to export the `PhoneInput.vue` component, create a file called `index.ts` inside the `phone` folder:

```ts
export { default as PhoneInput } from './PhoneInput.vue';
```