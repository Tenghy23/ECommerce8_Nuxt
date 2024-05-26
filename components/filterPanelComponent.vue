<template>
    <div class="filter-panel">
        <h2>Filters</h2>
        <form @submit.prevent="applyFilters">
            <div class="filter-group">
                <label for="category">Category:</label>
                <select id="category" v-model="filters.category">
                    <option value="">All</option>
                    <option v-for="category in categories" :key="category" :value="category">
                        {{ category }}
                    </option>
                </select>
            </div>
            <div class="filter-group">
                <label for="price">Price:</label>
                <input id="price" type="number" v-model="filters.price" />
            </div>
            <div class="filter-group">
                <label for="brand">Brand:</label>
                <select id="brand" v-model="filters.brand">
                    <option value="">All</option>
                    <option v-for="brand in brands" :key="brand" :value="brand">
                        {{ brand }}
                    </option>
                </select>
            </div>
            <button type="submit">Apply Filters</button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const filters = ref({
  category: '',
  price: '',
  brand: ''
})

const categories = ref(['Electronics', 'Fashion', 'Home'])
const brands = ref(['Apple', 'Samsung', 'Nike'])

onMounted(() => {
  // Call an API or update the data based on the filters
  console.log('Filters applied:', filters.value)
})

function applyFilters() {
  // Call an API or update the data based on the filters
  console.log('Filters applied:', filters.value)
}
</script>

<style scoped>
.filter-panel {
    background-color: #f7f7f7;
    padding: 20px;
    border: 1px solid #ddd;
    width: 300px;
    float: left;
    margin-right: 20px;
}

.filter-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

select,
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #444;
}
</style>