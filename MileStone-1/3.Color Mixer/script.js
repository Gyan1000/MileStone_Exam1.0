let result=document.getElementById("result");

let first_color=prompt("Enter first Color name").toLowerCase();
let second_color=prompt("Enter second Color name").toLowerCase();
let color_mixer; 
switch(first_color)
{
    case "red":
        switch(second_color)
        {
            case "blue":
                color_mixer="purple"
                break;
             case "yellow":
                color_mixer="orange";
                break;   
              default:
                color_mixer="invalid color combination";
                break;  
        }
        break;
        case "blue":
            switch(second_color)
            {
                case "red":
                color_mixer="purple";
                break;
                case "yellow":
                    color_mixer="green";
                    break;
                default:
                    color_mixer="invalid color combination";
                    break;    
            }
            break;
          case "yellow":
            switch(second_color)
            {
              case "red":
                color_mixer="orange";
                break;
               case "blue":
                color_mixer="green";
                break;
                default:
                    color_mixer="invalid color combination";
                break; 
            }
            break;
            default:
              color_mixer="Invalid color combination";
            break;  
}

     console.log("out_Put: ",color_mixer);

     result.textContent=`Result: ${color_mixer}`;