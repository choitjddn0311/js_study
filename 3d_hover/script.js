VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    galre: true
});


let list = document.querySelectorAll(".sci li a");
let bg = document.querySelector("body");
list.forEach(element => {
    element.addEventListener("mouseenter" , function(event){
        let color = event.target.style.getPropertyValue('--clr');
        bg.style.backgroundColor = color;
    })
    element.addEventListener("mouseleave" , function(event){
        bg.style.backgroundColor = '#fff';
    })
});