const bodyElement= document.querySelector("body")
bodyElement.addEventListener("mousemove",(event)=>{
    const xops=event.offsetX;
    const yops=event.offsety;
    const spanE1 =document.createElement("span");
    spanE1.style.left=xops+ "px"
    spanE1.style.top=yops+ "px"
    const size =Math.random()*100;
    spanE1.style.width=size +"px"
    spanE1.style.height=size +"px"
    bodyElement.appendChild(spanE1);
   setTimeout(()=>{
    spanE1.remove();

   },3000)

});