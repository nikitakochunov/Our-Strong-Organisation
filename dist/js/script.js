"use strict";

var headerItems = document.querySelectorAll('.header__item');
var headerLinks = document.querySelectorAll('.header__link');
var activeClass = 'header__item--active';
headerLinks.forEach(function (event) {
  event.addEventListener('click', function () {
    event.preventDefault;
    headerLinks.forEach(function (link) {
      link.closest('.header__item').classList.remove(activeClass);
    });
    event.closest('.header__item').classList.add(activeClass);
  });
});
var headerBurger = document.querySelector('.header__burger');
var headerMenu = document.querySelector('.header__menu');
var body = document.querySelector('body');
headerBurger.addEventListener('click', function (event) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});
var productsLinks = document.querySelectorAll('.products__link');
var productsActiveClass = 'products__item--active';
productsLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    if (!link.closest('.products__item').classList.contains('products__item--back')) {
      productsLinks.forEach(function (l) {
        l.closest('.products__item').classList.remove(productsActiveClass);
        console.log('kek');
      });
      link.closest('.products__item').classList.add(productsActiveClass);
    }
  });
});
var categoriesItem = document.querySelector('.categories__item');
var productsMenu = document.querySelector('.products__menu');
var productsBack = document.querySelector('.products__item--back');
categoriesItem.addEventListener('click', function (event) {
  event.preventDefault();
  productsMenu.classList.add('active');
  body.classList.add('lock');
  headerBurger.addEventListener('click', function (event) {
    event.preventDefault();
    productsMenu.classList.remove('active');
    body.classList.remove('lock');
  });
});
productsBack.addEventListener('click', function (event) {
  event.preventDefault();
  productsMenu.classList.remove('active');
  body.classList.remove('lock');
});
var peopleItems = document.querySelectorAll('.people__item');
var placePhoto = document.querySelector('.people__place-photo');
var placeTitle = document.querySelector('.people__place-title');
var placeSubtitle = document.querySelector('.people__place-subtitle');
var placeSocials = document.querySelector('.people__place-socials');
var peopleActiveClass = 'people__item--active';
ItemActive(document.querySelector('.people__item--active'));
peopleItems.forEach(function (event) {
  event.addEventListener('click', function () {
    peopleItems.forEach(function (item) {
      item.classList.remove(peopleActiveClass);
    });
    event.classList.add(peopleActiveClass);
    ItemActive(event);
  });
});

function ItemActive(item) {
  var photo = item.querySelector('.people__body');
  var title = item.querySelector('.people__title');
  var subtitle = item.querySelector('.people__subtitle');
  var socials = item.querySelector('.people__socials');
  var url = getComputedStyle(photo).backgroundImage;
  placePhoto.style.backgroundImage = url;
  placeSocials.innerHTML = socials.innerHTML;
  placeTitle.innerHTML = title.innerHTML;
  placeSubtitle.innerHTML = subtitle.innerHTML;
}