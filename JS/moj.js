const arrow = document.querySelector ('.arrow')
const rose = document.querySelector ('.rose')
let pink =document.querySelector ('.pink')
const show = document.querySelector ('.show')



function change () {
    pink.classList.toggle ('show')

    if (pink.classList.contains('show')) {
        arrow.style.transform = 'rotate(180deg)'
    }
    else {
        arrow.style.transform = 'rotate(0)'
    }
}

arrow.addEventListener('click', change)

