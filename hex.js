const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"] // hex code contains only this number and alphabet which are present on this array

const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",()=>{
   let hex_Code="#"  // hex color ka first letter '#' rhta hai

   // loop chalainge 0-6 tk kyonki hex code 6 ank ka hota hai

   for(let i=0;i<6;i++)
   {
    hex_Code+=hex[getrandomnumber()];
   }

   color.textContent=hex_Code;  // to show the content which are in form of text which represent the color name

   // changing background color of color which contains the hex_Code
   document.body.style.backgroundColor=hex_Code
})

function getrandomnumber(){
    return Math.floor(Math.random() *hex.length);
}