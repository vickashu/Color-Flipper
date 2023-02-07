const colors=["green","red","blue","#f15025","#ffff","#f12526","pink","cyan","rgba(133,120,122)"];

// fetching id,class for performing operation on them
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

// adding event listener

btn.addEventListener("click",()=>{
    // selecting random number between 0 to 3

     // initially select any index from colors (array.)
    const randnumber=getrandomnumber();
    // change color of above index
    document.body.style.backgroundColor=colors[randnumber];

    // change text content (color ka name us index pr jo hai vo show krega.)
    color.textContent=colors[randnumber];

})

function getrandomnumber(){
    return Math.floor( Math.random() * colors.length); // floor is using for using integer vale(ignoring decimal )
}