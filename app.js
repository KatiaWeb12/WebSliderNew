let slide = document.querySelectorAll('.slide')
slide.forEach((el,num)=>{
    el.addEventListener('click', ()=>{
        activeDelete()
        el.classList.add('active')
        localStorage.setItem('slide', num)
    })
})
function activeDelete(){
    slide.forEach((el,num)=>{
        el.classList.remove('active')
    })
}
function memorySlide(){
    let number = localStorage.getItem('slide')
    slide[number].classList.add('active')
}
memorySlide()