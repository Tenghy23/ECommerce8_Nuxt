<template>
  <v-card class="mx-auto" max-width="300">
    <v-img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
      <v-card-title>Item</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ props.product.name }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ props.product.price }}</div>
      <div>{{ props.product.description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="Share"></v-btn>
      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
// import { IProduct } from '../types/IProduct.ts'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>