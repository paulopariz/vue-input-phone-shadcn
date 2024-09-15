export const component = `<script setup lang="ts">
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

interface IProps {
  modelValue?: string;
  disabled?: boolean;
  placeholder?: string;
  placeholderSearch?: string;
  messageEmpty?: string;
  defaultCountry?: string;
}

const {
  modelValue,
  disabled,
  placeholder,
  placeholderSearch = "Search country...",
  messageEmpty = "No country found.",
  defaultCountry,
} = defineProps<IProps>();

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "update:modelValue", value: string): void;
}>();

const refDefaultCountry = ref(defaultCountry);
const allCountries = computed(() => countriesByContinent);

const open = ref(false);
const phoneNumber = ref(modelValue || "");

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
  return refDefaultCountry.value || languageToCountry[language] || "US";
}

function selectedCountry(data: ICountry) {
  if (disabled) return;
  phoneNumber.value = "";
  refDefaultCountry.value = "";
  countrySelected.value = data;
  open.value = false;
}

watch(phoneNumber, (value) => {
  if (disabled) return;
  emit(
    "update:modelValue",
    value.length === countrySelected.value?.mask.length ? value : value + "invalid"
  );
});
</script>

<template>
  <Popover v-model:open="open">
    <div class="flex w-full items-center">
      <PopoverTrigger as-child class="border-r-0" :disabled="disabled">
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
        :disabled="disabled"
        :placeholder="placeholder || countrySelected?.mask.replace(/#/g, '0')"
        :data-maska="countrySelected ? countrySelected.mask : ''"
      />
    </div>

    <PopoverContent align="start" class="w-44 p-0">
      <Command>
        <CommandInput class="h-9" :placeholder="placeholderSearch" />

        <CommandEmpty> {{ messageEmpty }} </CommandEmpty>
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
`;
