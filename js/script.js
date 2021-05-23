document.querySelector('.header__burger').addEventListener('click',()=>{
   document.querySelector('.header__burger').classList.toggle('active')
   document.querySelector('.top-nav').classList.toggle('active')
   document.querySelector('.rate').classList.toggle('active')
   document.querySelector('.top-right').classList.toggle('active')
   document.querySelector('body').classList.toggle('lock')
})