<template>
  <v-app-bar :rounded="rounded" :elevation="elevation">
    <v-app-bar-title>
      <v-icon v-if="icon" :icon="icon" :color="color" />
      <slot />
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  elevation: {
    type: Number,
    default: 2,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
})
</script>
