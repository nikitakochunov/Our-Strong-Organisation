const categoriesItem = document.querySelector('.categories__item')
const productsMenu = document.querySelector('.products__menu')
const productsBack = document.querySelector('.products__item--back')

categoriesItem.addEventListener('click', function (event) {
    event.preventDefault()
    productsMenu.classList.add('active')
    body.classList.add('lock')
    headerBurger.addEventListener('click', function (event) {
        event.preventDefault()
        productsMenu.classList.remove('active')
        body.classList.remove('lock')
    })
})

productsBack.addEventListener('click', function (event) {
    event.preventDefault()
    productsMenu.classList.remove('active')
    body.classList.remove('lock')
})