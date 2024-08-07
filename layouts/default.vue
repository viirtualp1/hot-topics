<template>
  <div>
    <v-layout>
      <app-bar icon="mdi-fire-circle" color="amber-darken-4">
        Hot Topics
      </app-bar>

      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import { AppBar } from '@/domains/ui'
</script>
