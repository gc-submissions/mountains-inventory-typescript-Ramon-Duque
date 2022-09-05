interface Mountains {
    name: string;
    height: number;
}

let mountains: Mountains[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

export const findNameOfTallestMountain =  ( array:Mountains[]):string => {
   let tallest = array[0];
   for (let i =  0; i < array.length; i++){
    if(array[i].height > tallest.height){
        tallest = array[i];

    };
}; 
return tallest.name;
};

export interface Product {
    name: string;
    price:number;
}

let products: Product[]= [
    {name: "Eggs", price: 1.00},
    {name: "Bread", price: 2.00},
    {name: "Juice", price: 2.00},
    {name: "Apples", price: 3.00}

]

// export const calcAverageProductPrice = (array:Product[]):number => {
//   let totalCost = array[1]
//   for (array[1] of products){
//     totalCost += array[1].price
//   }


// }

