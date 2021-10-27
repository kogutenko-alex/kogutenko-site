/*
   burger activate
*/
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');
burger.onclick = function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
}