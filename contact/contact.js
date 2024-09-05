let disp=document.querySelector('.mynav');
let btn=document.querySelector('#respons');
btn.addEventListener('click',function(){
    if(btn.classList.contains('closit')){
        disp.style.animation="hide 3s forwards linear";
        btn.classList.remove('closit');
    }else{
        disp.style.display="flex";
        disp.style.animation="disp 3s forwards linear";
        btn.classList.add("closit")
    }
})

let header=document.querySelector(".header");
window.onscroll=function (){
    if(window.scrollY !=0){
        header.style.background="#e3e6f3";
    }
    else{
        header.style.background=null;
    }
}