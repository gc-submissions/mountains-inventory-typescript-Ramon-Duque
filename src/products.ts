export interface Product {
    name:string;
    price:number;
}

let products: Product[]= [
    {name: "Eggs", price: 1.00},
    {name: "Bread", price: 2.00},
    {name: "Juice", price: 2.00},
    {name: "Apples", price: 3.00}

]

export const calcAverageProductPrice = (array:Product[]):number => {
  let totalitems = 0
  let totalCost = 0
  array.forEach((element)=>{
    let productPrice = element.price
    totalCost += productPrice
    let items = 1
    totalitems += items
  })

  if (totalitems ===0){
    return(0)
  }
  else
  return(totalCost / totalitems)
   
}

let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);