
let findCost=(days,carType)=>
 {
   let rental_cost=0;
   switch(carType)
   {
     case 'Economy':
        { 
            rental_cost=4000;
            break;
        }
      case 'Midsize':
        {
            rental_cost=10000
            break;
        }
       case 'Luxuary':
        {
               rental_cost=20000
               break;
         }
        default:
          {
               return "Enter Valid CarType"
           }   
      }
    return (rental_cost*days);
 }

let total_cost=findCost(5,"Luxuary");

console.log("Total Cost: ",total_cost)