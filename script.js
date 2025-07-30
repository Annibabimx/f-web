let slides = document.querySelectorAll(".slide");
const lightModeButton = document.querySelector(".light");
const darkModeButton = document.querySelector(".dark");

console.log(slides);
let count = 0;

slides.forEach(function(slide,index,){
    slide.style.left = `${index*100}%`;
})

function slider(){
    slides.forEach(function(curvel){
        curvel.style.transform = `translateX(-${count*100}%)`    
    })
    console.log(curvel);
}

setInterval(function(){
    count++;
    if (count == slides.length){
        count=0;
    }
    slider();
},1500)


lightModeButton.addEventListener('click', () => {
  document.body.classList.remove('dark');
  lightModeButton.classList.add('active');
  darkModeButton.classList.remove('active');
});

darkModeButton.addEventListener('click', () => {
  document.body.classList.add('dark');
  darkModeButton.classList.add('active');
  lightModeButton.classList.remove('active');
});