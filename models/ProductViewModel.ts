export class ProductPayload {
  inventoryId: string;
  categoryId: string | null;
  name: string | null;
  description: string | null;
  quantity: number | null;
  price: number | null;
  discountPercentage: number | null;
  discountFixedValue: number | null;

  constructor(data: any) {
    this.inventoryId = data.inventoryId;
    this.categoryId = data.categoryId;
    this.name = data.name;
    this.description = data.description;
    this.quantity = data.quantity;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.discountFixedValue = data.discountFixedValue;
  }
}
