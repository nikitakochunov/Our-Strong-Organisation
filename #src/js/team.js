const peopleItems = document.querySelectorAll('.people__item')

const placePhoto = document.querySelector('.people__place-photo')
const placeTitle = document.querySelector('.people__place-title')
const placeSubtitle = document.querySelector('.people__place-subtitle')
const placeSocials = document.querySelector('.people__place-socials')

const peopleActiveClass = 'people__item--active'



ItemActive(document.querySelector('.people__item--active'))

peopleItems.forEach((event) => {
    event.addEventListener('click', () => {
        peopleItems.forEach((item) => {
            item.classList.remove(peopleActiveClass)
        })
        event.classList.add(peopleActiveClass)
        ItemActive(event)
    })
})

function ItemActive(item) {

    const photo = item.querySelector('.people__body')
    const title = item.querySelector('.people__title')
    const subtitle = item.querySelector('.people__subtitle')
    const socials = item.querySelector('.people__socials')

    const url = getComputedStyle(photo).backgroundImage

    placePhoto.style.backgroundImage = url
    placeSocials.innerHTML = socials.innerHTML
    placeTitle.innerHTML = title.innerHTML
    placeSubtitle.innerHTML = subtitle.innerHTML
}


