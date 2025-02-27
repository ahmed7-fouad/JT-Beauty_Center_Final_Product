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



// policies page 

let policiesSections= document.querySelectorAll('.policy-section');
let policiesLinks = document.querySelectorAll('.policies-links li a');


window.onscroll=function(){
    let currentScrollPosition=document.documentElement.scrollTop;

    policiesSections.forEach(function(section){
        if(currentScrollPosition > (section.offsetTop - 200) && currentScrollPosition < (section.offsetTop + section.offsetHeight)){
            policiesLinks.forEach(function(link){
                link.classList.remove(`active-policy`);        
            })   
            let activelnk=document.querySelector(`.policies-links li a[href="#${section.id}"]`);
             activelnk.classList.add('active-policy'); 
        }
    })

}

   