const nav = document.getElementById("navbar");

const menuFullCloseBtn = document.getElementById("menu-full-close-btn");
const toggleBtn = document.getElementById("toggle-btn");
const menufull = document.getElementById("menu-full");



window.addEventListener("scroll",()=>{
  if(this.window.scrollY > 50){
    nav.classList.add("active");
    console.log("1")
}
else{
    nav.classList.remove("active")
    console.log("2")
  }
});




toggleBtn.addEventListener("click",()=>{
menufull.classList.add("active");
console.log("www")
});

menuFullCloseBtn.addEventListener("click",()=>{
  menufull.classList.remove("active");
});


gsap.from("#home h1",{
  y:100,
  opacity:0,
  duration:1,
  

});

gsap.from("#home h3",{
  y:50,
  opacity:0,
  duration:1.5,
  

})