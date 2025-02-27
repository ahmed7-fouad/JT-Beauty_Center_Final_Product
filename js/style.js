
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
 

// homepage nav only 
homepageLinks=document.querySelectorAll(`.homePageNavLinks li a`);
mainSections=document.querySelectorAll(`.scrolling-main-section`);


window.addEventListener('scroll',function(){
let currentLocation=document.documentElement.scrollTop;
mainSections.forEach((section)=>{
    if(currentLocation > (section.offsetTop - 100) && currentLocation < (section.offsetTop + section.offsetHeight)){
        homepageLinks.forEach((lnk)=>{
            lnk.classList.remove('active');  
        })

        let activeLink=document.querySelector(`.homePageNavLinks li a[href='#${section.id}']`);
        activeLink.classList.add('active');
    }
})
})



// switching branches btns
let branchesBtns =  document.querySelectorAll('.branches .branches-btns-parent button');
let maadiBranchBtn = document.querySelector('.branches .branches-btns-parent button:first-of-type');
let NewCairoBranchBtn = document.querySelector('.branches .branches-btns-parent button:nth-of-type(2');


// contact numbers
let contactNumOne=document.querySelector('.contact-content-1');
let contactNumTwo=document.querySelector('.contact-content-2');

// hours
let satTime=document.querySelector('.sat');
let sunTime=document.querySelector('.sun');
let monTime=document.querySelector('.mon');
let tuesTime=document.querySelector('.tues');
let wedTime=document.querySelector('.wed');
let thursTime=document.querySelector('.thurs');
let friTime=document.querySelector('.fri');


// location
let mapContentFirstPart=document.querySelector('.maps-content span:first-of-type');
let mapContentSecondPart=document.querySelector('.maps-content span:nth-of-type(2)')

// google maps source
let mapsDirection=document.querySelector('.map-direction');
// direct call btn
let directCallBtn=document.querySelector('.contact-btn-direct-call');
// contact part -> branches buttons


// auto typer 
let autoTyper= new Typed('.changer' , {
    strings: ["Radiance." ,"Glow.","Aura."],
    typeSpeed:200,
    backSpeed:100,
    loop:true
})


function AddMaadiData(){
// contact numbers
contactNumOne.textContent="0225196009";
contactNumTwo.textContent="01227102783";
// hours
satTime.textContent="Sat from 10 am till 7 pm";
sunTime.textContent="Sun from 10 am till 7 pm";
monTime.textContent="Mon from 10 am till 7 pm";
tuesTime.textContent="Tues from 10 am till 7 pm";
wedTime.textContent="Wednes from 10 am till 7 pm ";
thursTime.textContent="Thurs from 10 am till 7 pm";
friTime.textContent="Fri from 10 am till 7 pm";
// location
mapContentFirstPart.textContent="Street 206 , Villa 18";
mapContentSecondPart.textContent="Degla Maadi";
// google maps iframe source
 mapsDirection.src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.813346044412!2d31.27543168488691!3d29.956047081914537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU3JzIxLjgiTiAzMcKwMTYnMjMuNyJF!5e0!3m2!1sar!2seg!4v1738955830876!5m2!1sar!2seg";
//  direct call btn
directCallBtn.href=`tel:+201227102783`;

}


function AddNewCairoData(){
// contact numbers
contactNumOne.textContent="0225628564";
contactNumTwo.textContent="01092308595";
// hours
monTime.textContent="Mon closed ";
// location
mapContentFirstPart.textContent="Street 79 , Villa 5";
mapContentSecondPart.innerHTML=`5<sup>th</sup> , 3<sup>rd</sup> district`;
// google maps iframe source
 mapsDirection.src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3455.08464242016!2d31.439591384885713!3d30.00572588189631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAwJzIwLjYiTiAzMcKwMjYnMTQuNyJF!5e0!3m2!1sar!2seg!4v1738955860411!5m2!1sar!2seg";
// direct call btn
directCallBtn.href=`tel:+201092308595`;
}



branchesBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(btn.classList.contains('m-b')){
             AddMaadiData();
        }
        else{
             AddNewCairoData();
        }
      
    })
})

maadiBranchBtn.addEventListener('click' , function(){
    if(maadiBranchBtn.classList.contains("active-branch-btn") === false){
        maadiBranchBtn.classList.add('active-branch-btn');
        NewCairoBranchBtn.classList.remove('active-branch-btn');
    }

})

NewCairoBranchBtn.addEventListener('click' , function(){
    if(NewCairoBranchBtn.classList.contains("active-branch-btn") === false){
        NewCairoBranchBtn.classList.add("active-branch-btn");
        maadiBranchBtn.classList.remove("active-branch-btn");
    }
})
