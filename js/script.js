// -----------------NavBar------------------------

let menu = document.querySelector(".menu");

menu.addEventListener("click",()=>{
    document.querySelectorAll(".target").forEach((item)=>{
        item.classList.toggle("changed");
    })
})


// -----------------Section-1------------------------
const icons = document.querySelectorAll('.section-1-icons i');
let counter = 1;
setInterval(() => {
    counter++
    const icon = document.querySelector('.change');
    icon.classList.remove('change');
    if(counter >icons.length){
        icons[0].classList.add("change")
        counter = 1;
    }
    else{
    icon.nextElementSibling.classList.add('change')
    }
}, 1000); 
