const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const li_1 = document.querySelector('.li_1');

btn1.addEventListener("click" , e=> {
    e.preventDefault();
    const newLi = document.createElement("li");
    newLi.innerText = "ㅎㅇ 님 뭐함?";
    li_1.appendChild(newLi);
});

btn2.addEventListener("click" , e=> {
    li_1.removeChild(li_1.lastChild);
});