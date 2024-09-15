<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colorMode = useColorMode();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" class="text-xs tracking-wide">
        {{ colorMode.preference }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="colorMode.preference = 'light'"> Light </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'dark'"> Dark </DropdownMenuItem>
      <DropdownMenuItem @click="colorMode.preference = 'system'"> System </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
