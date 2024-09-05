let header=document.querySelector(".header");
window.onscroll=function (){
    if(window.scrollY !=0){
        header.style.background="#e3e6f3";
    }
    else{
        header.style.background=null;
    }
}
