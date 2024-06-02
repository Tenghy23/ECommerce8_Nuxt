import axios from "axios";
import { ProductViewModel } from "../models/ProductViewModel.ts";

const apiUrl = "https://localhost:5001/api/getAllProducts";

async function getProducts(): Promise<ProductViewModel[]> {
  const response = await axios.get(apiUrl);
  return response.data.map((item: any) => new ProductViewModel(item));
}
