function console(e) {
    if(document.querySelectorAll('p').length === 10) {
        document.querySelectorAll('p').forEach(e => e.remove())
    }
    const p = document.createElement('p');
    p.textContent = e;
    document.body.append(p);
}
const contain2 = document.querySelector(".contain2")
const item = document.querySelector(".item");


//드래그를 시작할때 발생하는 이벤트 dragstart
// item.addEventListener("dragstart" , (e) => {
//     console("드래그를 시작하면 발생하는 이벤트")
// })

//드래그 중일때 발생하는 이벤트 drag
// item.addEventListener("drag" , (e) => {
//     console("드래그를 하면 발생하는 이벤트")
// })

//드래그를 할때 이 영역에 닿으면 발생하는 이벤트 .dragenter
// contain2.addEventListener("dragenter" , (e)=> {
//     console("드래그 요소가 영역에 닿으면 발생하는 이벤트")
// })
