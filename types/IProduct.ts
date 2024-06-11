export interface IProduct {
  inventoryId: string;
  categoryId: string | null;
  name: string | null;
  description: string | null;
  quantity: number | null;
  price: number | null;
  discountPercentage: number | null;
  discountFixedValue: number | null;
}
