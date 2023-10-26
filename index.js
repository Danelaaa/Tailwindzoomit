const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const hs = document.getElementById('header_section')

btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
