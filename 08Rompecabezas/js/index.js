const miniatura = document.getElementById('miniatura')
const enlaces = document.querySelectorAll('a[data-miniatura]')

enlaces.forEach(enlace => {

    enlace.addEventListener('mouseenter', e=>{
        miniatura.src = enlace.dataset.miniatura   
        miniatura.style.display = 'block'
    })

    enlace.addEventListener('mousemove', e=>{
        miniatura.style.left = e.pageX + 20 + 'px'
        miniatura.style.top = e.pageY + 20 + 'px'
    })

    enlace.addEventListener('mouseleave', e=>{
        miniatura.style.display = 'none'  
    })

})
