<template>
      <headerComponent />
      <h1>Mouse position is at: {{ x }}, {{ y }}</h1>
      <div class="centerContainers">
            <div class="filterPanelContainer">
                  <filterPanelContainer />
            </div>
            <div class="productContainer">
                  <cardComponent v-for="item in Array(50).fill(0)" :key="item" />
            </div>
      </div>
</template>

<script setup>
import cardComponent from '../components/cardComponent.vue'
import headerComponent from '../components/headerComponent.vue'
import filterPanelContainer from '../components/filterPanelComponent.vue'
import { getMousePosition } from '../composables/mouseTracker.js'

const { x, y } = getMousePosition()
// call api and load information
</script>

<style scoped>
.productContainer {
      display: flex;
      flex-wrap: wrap;
      max-width: 66%;
      margin-bottom: 20px;
      margin-top: 20px;
}

.filterPanelContainer {
      display: flex;
      flex-wrap: wrap;
      max-width: 33%;
      margin-top: 20px;
}

h1 {
      margin: 60px 0px 0px 0px;
}

.centerContainers {
      display: flex;
      justify-content: center;
}
</style>