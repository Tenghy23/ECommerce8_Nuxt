import { defineStore } from 'pinia';
import { ref, watch } from "vue";
import axios from "axios";
import type { IProduct } from "../types/IProduct";

export const useProductStore = defineStore("product", () => {
  const products = ref<IProduct[]>([]);
  const product = ref<IProduct | null>(null);

  const retrieveAllProducts = async () => {
    try {
      const response = await axios.get<IProduct[]>(
        `${BASE_URL}/getAllProducts`
      );
      products.value = ref(response.data).value;
    } catch (error) {
      console.error("Error retrieving products:", error);
    }
  };

  const retrieveProductFromId = async (id: string) => {
    try {
      const response = await axios.post<IProduct>(
        `${BASE_URL}/getProductWithId`,
        { id }
      );
      product.value = response.data;
    } catch (error) {
      console.error("Error retrieving product:", error);
    }
  };

  // watchEffect(() => {
  //   retrieveAllProducts();
  // });

  return { products, product, retrieveAllProducts, retrieveProductFromId };
});
