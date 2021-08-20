const productsLinks = document.querySelectorAll('.products__link')

const productsActiveClass = 'products__item--active'

productsLinks.forEach(function (link) {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        if (!(link.closest('.products__item').classList.contains('products__item--back'))) {
            productsLinks.forEach((l) => {

                l.closest('.products__item').classList.remove(productsActiveClass)
                console.log('kek')

            })

            link.closest('.products__item').classList.add(productsActiveClass)

        }
    }
    )
})