<template>
      <headerComponent />
      <div class="inline-flex-container">
            <!-- <h1>Mouse position is at: {{ x }}, {{ y }}</h1> -->
            <button @click="retrieveAllProducts">Send to retrieve Products</button>
      </div>
      <div class="centerContainers">
            <div class="filterPanelContainer">
                  <filterPanelContainer />
            </div>
            <div class="productContainer">
                  <div v-if="productStore.products.length > 0">
                        <cardComponent v-for="item in productStore.products" :key="item.inventoryId" :product="item" />
                  </div>
                  <div v-else>{{ console.log("look at: " + productStore.products) }}</div>
            </div>
      </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import cardComponent from '../components/cardComponent.vue'
import headerComponent from '../components/headerComponent.vue'
import filterPanelContainer from '../components/filterPanelComponent.vue'
import { getMousePosition } from '../composables/mouseTracker.ts'
import { useProductStore } from '../store/productStore.ts';

// let { x, y } = getMousePosition()
// call api and load information

let loading = ref(true);

let productStore = useProductStore();
let { product, products } = storeToRefs(productStore);
let { retrieveProductFromId, retrieveAllProducts } = productStore;

// Call API and load information when the component mounts
onMounted(async () => {
      try {
            await productStore.retrieveAllProducts();
            if (productStore.products.length === 0) {
                  throw new Error("Products list is empty");
            } else {
                  loading.value = false
            }
      } catch (error) {
            console.error('Error retrieving products:', error);
            loading.value = false; // Set loading to false in case of an error
      }
});
</script>

<style scoped>
.productContainer {
      display: flex;
      flex-wrap: wrap;
      max-width: 66%;
      gap: 1rem;
}

.filterPanelContainer {
      display: flex;
      flex-wrap: wrap;
      max-width: 33%;
      min-width: 299px;
}

@media (max-width: 599px) {
      .filterPanelContainer {
            display: none;
      }
}

@media (max-width: 419px) {
      .productContainer {
            display: none;
      }
}

h1 {
      margin: 60px 0px 0px 0px;
}

.centerContainers {
      display: flex;
      justify-content: center;
}

.inline-flex-container {
      display: inline-flex;
      /* Additional flex properties */
      flex-direction: row;
      /* Example: align items in a row */
}

button {
      padding: 8px 16px;
      border: none;
      transition: transform 0.3s;
}

button:active {
      transform: scale(0.9);
      /* scale down the button slightly */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      /* add a box shadow */
}
</style>