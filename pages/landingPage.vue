<template>
      <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
      <div class="d-flex flex-wrap">
            <cardComponent v-for="item in Array(50).fill(0)" :key="item"
                  style="margin-bottom: 20px; margin-top: 20px;" />
      </div>

</template>

<script setup>
import cardComponent from '../components/cardComponent.vue'
import { getMousePosition } from '../composables/mouseTracker.js'

const { x, y } = getMousePosition()
// call api and load information
</script>

<style lang="scss" scoped></style>