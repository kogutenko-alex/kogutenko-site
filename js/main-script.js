/*
   burger activate
*/
var burger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu');
burger.onclick = function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   document.querySelector('body').classList.toggle('lock');
}

/*
   service activate
*/
var list_service = document.querySelector('.service__list-items');
list_service.onmouseover = list_service.onmouseout = handler;

function handler(event) {
   if (event.type == 'mouseover') {
      event.target.classList.add('service_list_active');
      //if (document.querySelectorAll('.service_list_active').length == 1) {
      //   console.log("we search activity");
      //   document.querySelector('.web').style.display = "block";
      //}
      show_info_service(event);
   }
   if (event.type == 'mouseout') {
      event.target.classList.remove('service_list_active');
      close_info_service(event);
      //if (document.querySelectorAll('.service_list_active').length == 0) {
      //   console.log("we dont search activity");
      //   document.querySelector('.web').style.display = "block";
      //}
   }
}

function show_info_service(ev) {
   var el = ev.target.id;
   var id = '.' + el;
   var elem = document.querySelector(id);
   switch (el) {
      case 'web':
         elem.style.display = "block";
         break;
      case 'logo':
         elem.style.display = "block";
         break;
      case 'ui':
         elem.style.display = "block";
         break;
      case 'photo':
         elem.style.display = "block";
         break;
   }
}

function close_info_service(ev) {
   var el = ev.target.id;
   var id = '.' + el;
   var elem = document.querySelector(id);
   var web = document.querySelector('web');
   switch (el) {
      case 'web':
         elem.style.display = "none";
         break;
      case 'logo':
         elem.style.display = "none";
         break;
      case 'ui':
         elem.style.display = "none";
         break;
      case 'photo':
         elem.style.display = "none";
         break;
   }
}