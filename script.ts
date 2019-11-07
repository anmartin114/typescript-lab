interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

// function findNameOfTallestMountain(mountains: Mountain[]): string {
//   let currentTallest: number = 0;
//   let tallest: string = "";
//   for (let i = 0; i < mountains.length; i++) {
//     if (mountains[i].height > currentTallest) {
//       currentTallest = mountains[i].height;
//       tallest = mountains[i].name;
//       return tallest;
//     }
//   }
// }
// let tallest: string = findNameOfTallestMountain(mountains);
// console.log(tallest);

function findNameOfTallestMountain(mountains: Mountain[]): string {
  let currentTallest: number = 0;
  let tallest: string = null;
  mountains.forEach(mountains => {
    if (mountains.height > currentTallest) {
      currentTallest = mountains.height;
      tallest = mountains.name;
    }
  });
  return tallest;
}
let tallest: string = findNameOfTallestMountain(mountains);
console.log(tallest);

//////////////////////////////////////////////////

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "pizza", price: 10 },
  { name: "tacos", price: 8 },
  { name: "icecream", price: 5 }
];

function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;
  let average: number = 0;
  products.forEach(products => {
    sum += products.price;
  });
  return sum / products.length;
}
let average: number = calcAverageProductPrice(products);
console.log(average);

////////////////////////////////////////////////////////

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  let value: number = 0;

  inventory.forEach(inventory => {
    value += inventory.product.price * inventory.quantity;
  });
  return value;
}
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
