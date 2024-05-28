let section = document.querySelector('section');
window.addEventListener('scroll' , () => {
    let value = window.scrollY;
    section.style.clipPath = "circle("+ value * 2 +"px at left center)"
})