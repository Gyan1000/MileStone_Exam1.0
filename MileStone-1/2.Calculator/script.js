let num1 = parseInt(prompt("Enter First number"));
let num2 = parseInt(prompt("Enter second number"));

let show_result=document.querySelector("h2");

let operator = prompt("Enter operator")
let result;
if(isNaN(num1) || isNaN(num2))
{
    alert("Please Enter Number")
}
else{
switch (operator) {
    case "+":
        {

        result = num1 + num2;
        console.log("result", result);
        break;

       }

    case "-":
        {
            result = num1 - num2;
            console.log("result", result);
            break;
        }

    case "*":
        {
            result = num1 * num2;
            console.log("result", result);
            break;
        }
    case "/":
        {
            result = num1 / num2;
            console.log("result", result);
            break;
        }
   
    default:
        {
            console.log("Invalid Operator")
            alert("PLEASE ENTER OPERATOR ONLY(+,-,*,/) ");
        }
 }
 show_result.textContent="Result: "+result;

 setTimeout(()=>{alert("You can also check the Result in Browser Console")},2000)
}