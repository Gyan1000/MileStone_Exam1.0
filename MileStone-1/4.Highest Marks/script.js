
let result=document.querySelector("h2");

let marks=[];
let max=0  

// TAKING INPUT FROM USER 
for(let i=0;i<=4;i++)
{
 let no=parseInt(prompt(`enter marks for student no ${i+1}`))
  marks.push(no);
}

console.log("Entered marks",marks)

//CHECK CONDITION

marks.length==5 ? findMaxMarks() : console.log("please Enter 5 students marks");

function findMaxMarks()
{
marks.forEach(element => {
    //  if(element>max)
    //    {
    //       max=element;
    //    }
   
    element > max ? max=element : 0;
})     

}
console.log("Max marks",max); //display on browser console

result.textContent=`Max Marks: ${max}`;//display on browser screen

//   second logic

//  max=marks.length>0?Math.max(...marks):null;

//  max!=null?console.log("max marks",max):console.log("please enter 5 students marks")