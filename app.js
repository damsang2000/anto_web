const slide=document.querySelector('.product_cards');
const slide2=document.querySelector('.product_cards2');
const slides=[...document.querySelectorAll('.product_card')]
const slides2=[...document.querySelectorAll('.product_card2')]
const btnsend=document.querySelector('.btn_send');
const input=document.querySelector('.text');
const imgWidth=230
const nextbtn=document.querySelector('.next');
const prevbtn=document.querySelector('.prev')

const nextbtn2=document.querySelector('.next2');
const prevbtn2=document.querySelector('.prev2')
slide.style.width=`${slides.length*imgWidth}px`;

let index=1;
let index2=1
let lengthslide=slides.length;
let lengthslide2=slides2.length;
function next(){
    if(index<lengthslide-5)
    {
          index++;  
    }else
    {
        index=0;
    }
    slide.style.transform=`translateX(-${imgWidth*index}px)`
}
function prev(){
    if(index>0){
        index--;
    }else{
        index=lengthslide-5;
    }
    console.log(index)
    slide.style.transform=`translateX(-${imgWidth*index}px)`
}
nextbtn.addEventListener('click',()=>{
    next()
})
prevbtn.addEventListener('click',()=>{
    prev()
})
function next2(){
    if(index2<lengthslide2-5)
    {
          index2++;  
    }else
    {
        index2=0;
    }
    slide2.style.transform=`translateX(-${imgWidth*index2}px)`
}
function prev2(){
    if(index2>0){
        index2--;
    }else{
        index2=lengthslide2-5;
    }
    console.log(index2)
    slide2.style.transform=`translateX(-${imgWidth*index2}px)`
}
nextbtn2.addEventListener('click',()=>{
    next2()
})
prevbtn2.addEventListener('click',()=>{
    prev2()
})
btnsend.onclick=()=>{
    alert(`Đã gửi mail đến ${input.value}`)
    // console.log(input.value)
}
