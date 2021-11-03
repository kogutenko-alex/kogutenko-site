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
   if (list_service.classList.contains('service_list_active')) {
      list_service.classList.remove('service_list_active');
   }
   if (event.type == 'mouseover') {
      show_info_service(event);
   }
   if (event.type == 'mouseout') {
      close_info_service(event);
   }
}

function show_info_service(event) {
   var el = event.target;
   if (el.id !== '') {
      var class_ = '.' + el.id;
      el.classList.add('service_list_active');
      var elem = document.querySelector(class_);
      switch (el.id) {
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
}

function close_info_service(event) {
   var el = event.target;
   if (el.id !== '') {
      var class_ = '.' + el.id;
      el.classList.remove('service_list_active');
      var elem = document.querySelector(class_);
      switch (el.id) {
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
}


var isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android()
         || isMobile.BlackBerry()
         || isMobile.iOS()
         || isMobile.Opera()
         || isMobile.Windows()
      );
   }
};

let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   var arrow = document.querySelectorAll(".portfolio__arrow");
   for (i = 0; i < arrow.length; i++) {

      let thisArrow = arrow[i];
      let thisLink = thisArrow.previousElementSibling;
      let subMeu = thisArrow.nextElementSibling;
      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {

      });
   }
} else {
   body.classList.add('mouse');
}
