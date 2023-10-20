let item_quantity=[10,2,3,7,5];

function double_Quantity()
{
   let double_quantity= item_quantity.map((quantity)=>quantity*2);

    return double_quantity;
}
console.log(double_Quantity());