<template>
  <v-card color="blue-grey">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>

    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  text: string
}>()
</script>
