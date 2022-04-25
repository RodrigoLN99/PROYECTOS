const nav = document.querySelector('.barradenavegación');
window.addEventListener('scroll',function(){
    nav.classList.toggle('active',window.scrollY >0)
})