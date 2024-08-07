<template>
  <v-container class="main-page">
    <v-row>
      <v-col
        v-for="topic in 4"
        :key="`topic-${topic}`"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <topic-card
          :title="`Topic ${topic + 1}`"
          subtitle="Topic subtitle"
          text="Topic description"
        />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card color="blue-grey" variant="tonal" @click="addTopic">
          <v-card-title class="main-page__add">
            <v-icon icon="mdi-plus" size="small" />
            Add topic
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" src="./MainPage.scss"></style>

<script setup lang="ts">
import { TopicCard } from '@/domains/ui'

function addTopic() {}
</script>
