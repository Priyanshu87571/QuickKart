export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  unit: string;
  rating: number;
  discount?: number;
  description?: string;
  stock?: number;
  brand?: string;
}