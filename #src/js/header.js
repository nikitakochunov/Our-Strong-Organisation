const headerItems = document.querySelectorAll('.header__item')
const headerLinks = document.querySelectorAll('.header__link')

const activeClass = 'header__item--active'

headerLinks.forEach(function (event) {

    event.addEventListener('click', () => {
        event.preventDefault
        headerLinks.forEach((link) => {
            link.closest('.header__item').classList.remove(activeClass)
        })
        event.closest('.header__item').classList.add(activeClass)
    })
})