let circle1 = document.querySelector('.circle1');
let circle2 = document.querySelector('.circle2');

for(let i = 0; i<=80; i++) {
    let span1 = document.createElement('span');
    span1.style.setProperty('--i',i);
    circle1.appendChild(span1);

    let span2 = document.createElement('span');
    span2.style.setProperty('--i',i);
    circle2.appendChild(span2);
}









// setProperty 함수는 style의 값 설정하는 내장함수