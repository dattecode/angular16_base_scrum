export const productsList: Product[] = [
  { id: 1, name: 'lavanda', price: 10, description: 'Botella 1lt' },
  { id: 2, name: 'detergente', price: 12, description: '200 usos' },
  { id: 3, name: 'limpiar vidrio', price: 8, description: '400 ml' },
  { id: 4, name: 'desengrasante', price: 5, description: '600 ml' },
  { id: 5, name: 'suavisante', price: 3 },
];

export interface Product {
  id:number | string,
  name:string,
  price:number,
  description?:string
}
