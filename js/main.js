const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')
      
      if(navToggle){
          navToggle.addEventListener('click', () =>{
              navMenu.classList.add('show-menu')
          })
      }
      if(navClose){
          navClose.addEventListener('click', () =>{
              navMenu.classList.remove('show-menu')
          })
      }
      
      const navlink=document.querySelectorAll('.nav_link')
      const linkAction=()=>{
          const navMenu=document.getElementById('nav-menu')
          navMenu.classList.remove('show-menu')
      }
      navlink.forEach(n=>n.addEventListener('click',linkAction))

/* blur header */
 const blurheader=()=>{
    const header=document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurheader) 

/* swiper js  */
let swiperfavourite = new Swiper('.favourite_swipper', {
  loop: true,
  slidesPerView:'auto',
  centeredSlides:'auto',
  grabCursor:true,
   
   
   breakpoints:{
       768:{
           slidesPerView:3,
       }
   }
   
  
})


/* show scroll up  */
const scrollup=()=>{
    const scrollup=document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                     : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup) 

/* scroll active */
const sections =document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop - 58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav_menu a[href*='+ sectionId +']')
        if(scrollDown > sectionTop && scrollDown<=sectionTop+sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)


/* scroll reveal  animation*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true,//repeat animation
    
})
sr.reveal(`.home_social,.favourite_container,.sponsor_container ,.footer`)
sr.reveal(`.home_title span:nth-child(1)`,{origin:'left',opacity:1})
sr.reveal(`.model_img`,{origin:'top'})
sr.reveal(`.home_title span:nth-child(3)`,{origin:'right',opacity:1})
sr.reveal(`.home_tooltip,.home_button,.model_button`,{origin:'bottom'})
sr.reveal(`.about_data`,{origin:'left'})
sr.reveal(`.about_img,.model_tooltip`,{origin:'right'})
sr.reveal(`#favourite h2:nth-child(1)`,{origin:'top'})
sr.reveal(`#model h2:nth-child(1)`,{origin:'top'})
