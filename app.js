let h1=document.querySelector(".h1");
let h2=document.querySelector(".h2");
let h3=document.querySelector(".h3");
let h4=document.querySelector(".h4");
let h5=document.querySelector(".h5");
let h6=document.querySelector(".h6");

let middle_img=document.querySelector(".middle_img");

let lenth=window.innerHeight;
console.log(lenth);
if(lenth>56){
    let banner=document.querySelector(".banner");
    banner.style.position="sticky";
    banner.style.position="100px";
    window.addEventListener('scroll', function(){


        
        let value=window.scrollY;
        console.log(value);
        h1.style.top=200 - value* 0.2 +'px';
        middle_img.style.top=100-value*0.2+'px';
        h6.style.top=240-value*0.2+'px';
    })
}