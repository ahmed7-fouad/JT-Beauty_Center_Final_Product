navBar=document.getElementById('nav');
let navLinks=document.querySelectorAll(`.nav-link:not(.nav-link.active)`);
let contactBtns=document.querySelectorAll('.contact-btn');
let navToggler=document.querySelector('.navbar-toggler');

// navbar box shadow
window.addEventListener('scroll',function(){
     if(scrollY===0){
        navBar.style.cssText='box-shadow:none';
    }
    else{
       navBar.style.cssText='box-shadow: rgba(229, 215, 215, 0.082) 0px -50px 36px -28px inset;';
 
}
})

 // services cards part

let servicesCards=document.querySelectorAll(`.srv-box`);

servicesCards.forEach(function(srv){
srv.addEventListener(`click` , function(){
    let srvBranchBanner = srv.children[0].children[0];
    srvBranchBanner.style.cssText=`top:0%;`;
})
})
servicesCards.forEach(function(serv){
serv.addEventListener(`mouseleave` , ()=>{
    if(serv.children[0].children[0].style.top===`0%`){
        serv.children[0].children[0].style.top=`110%`;
    }

})
})


// services cards scrolling part
let servCardDesc=document.querySelectorAll(`.card-text`);
let servCardNote=document.querySelectorAll(`.card-text-inner-content`);

setInterval(()=>{
    servCardDesc.forEach((srv)=>{
        if(srv.children[0].scrollHeight > srv.clientHeight){
          srv.parentElement.children[1].innerHTML=`scroll to view more <i class="fa-solid fa-arrow-down-long"></i>`;  
        }
        else{
            srv.parentElement.children[1].innerHTML=`service description`; 
        }
})
},100)
