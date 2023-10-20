

let find_Discount=(original_price,discount_price)=>{
    
   let discount=(discount_price/original_price)*100;

     return (discount.toFixed(2))+"%";
}
let customer_discount=find_Discount(600,240);

console.log("Discount: ",customer_discount);