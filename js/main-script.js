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


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


//var list_service = document.querySelector('.service__list-items');
//list_service.onmouseover = list_service.onmouseout = handler;

//function handler(event) {
//   if (list_service.classList.contains('service_list_active')) {
//      list_service.classList.remove('service_list_active');
//   }
//   if (event.type == 'mouseover') {
//      show_info_service(event);
//   }
//   if (event.type == 'mouseout') {
//      close_info_service(event);
//   }
//}

//function show_info_service(event) {
//   var el = event.target;
//   if (el.id !== '') {
//      var class_ = '.' + el.id;
//      el.classList.add('service_list_active');
//      var elem = document.querySelector(class_);
//      switch (el.id) {
//         case 'web':
//            elem.style.display = "block";
//            break;
//         case 'logo':
//            elem.style.display = "block";
//            break;
//         case 'ui':
//            elem.style.display = "block";
//            break;
//         case 'photo':
//            elem.style.display = "block";
//            break;
//      }
//   }
//}

//function close_info_service(event) {
//   var el = event.target;
//   if (el.id !== '') {
//      var class_ = '.' + el.id;
//      el.classList.remove('service_list_active');
//      var elem = document.querySelector(class_);
//      switch (el.id) {
//         case 'web':
//            elem.style.display = "none";
//            break;
//         case 'logo':
//            elem.style.display = "none";
//            break;
//         case 'ui':
//            elem.style.display = "none";
//            break;
//         case 'photo':
//            elem.style.display = "none";
//            break;
//      }
//   }
//}


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


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

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
   goToSlide(currentSlide++);
}
function previousSlide() {
   goToSlide(currentSlide--);
}
//9
function goToSlide(n) {
   var allSlides = 0;
   var allSlides_ = 0;
   if (window.screen.width > 1280) {
      allSlides_ = slides.length / 4; // 2.25
      allSlides = Math.ceil(allSlides_); //3
      if (n > allSlides) {
         n = 0;
         currentSlide = 0;
      }
      var k = 0, index = 0, i = 0;
      while (i < slides.length) {
         if (slides[i].classList.contains('showing')) {
            slides[i].classList.remove('showing');
            index = i;
         }
         i++;
      }
      if (index == --slides.length) {
         index = -1;
      }
      while (index < slides.length && k < 4) {
         slides[++index].classList.add('showing');
         k++;
      }

   }
   if (window.screen.width <= 1280) {
      allSlides_ = slides.length / 2; // 2.25
      allSlides = Math.ceil(allSlides_); //3
      if (n > allSlides) {
         n = 0;
         currentSlide = 0;
      }
      var k = 0, index = 0, i = 0;
      while (i < slides.length) {
         if (slides[i].classList.contains('showing')) {
            slides[i].classList.remove('showing');
            index = i;
         }
         i++;
      }
      if (index == --slides.length) {
         index = -1;
      }
      while (index < slides.length && k < 2) {
         slides[++index].classList.add('showing');
         k++;
      }
   }

}

var playing = true;
var pauseButton = document.getElementById('pause');
function pauseSlideshow() {
   pauseButton.innerHTML = 'Play';
   playing = false;
   clearInterval(slideInterval);
}
function playSlideshow() {
   pauseButton.innerHTML = 'Pause';
   playing = true;
   slideInterval = setInterval(nextSlide, 2000);
}
pauseButton.onclick = function () {
   if (playing) {
      pauseSlideshow();
   } else {
      playSlideshow();
   }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');
next.onclick = function () {
   pauseSlideshow();
   nextSlide();
};
previous.onclick = function () {
   pauseSlideshow();
   previousSlide();
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


var slides_service = document.querySelectorAll('.service__content ._service__content-item');
var slides_service_items = document.querySelectorAll('.service__list-items .service__list-item');
var _currentSlide = 0;
var _slideInterval = setInterval(_nextSlide, 2000);

function _nextSlide() {
   if (_currentSlide > --slides_service.length) {
      _currentSlide = 0;
   }
   _goToSlide(_currentSlide++);
}
function _previousSlide() {
   if (_currentSlide > slides_service.length) {
      _currentSlide = 0;
   }
   _goToSlide(_currentSlide--);
}

function _goToSlide(n) {
   var allSlides = 0;
   allSlides = slides_service.length; //3
   console.log(n)
   var k = 0, index = 0, i = 0;
   console.log(slides_service_items[n].classList);
   var item = n;
   if (slides_service[n].classList.contains('show-service')) {
      slides_service[n].classList.remove('show-service');
      slides_service[n].classList.add('hide-service');
      n++;
      if (n >= allSlides) {
         n = 0;
      }
      slides_service[n].classList.remove('hide-service');
      slides_service[n].classList.add('show-service');
   }
   console.log(slides_service_items[item])
   if (slides_service_items[item].classList.contains('service_list_active')) {
      slides_service_items[item].classList.remove('service_list_active');
      item++;
      if (item >= allSlides) {
         item = 0;
      }
      slides_service_items[item].classList.add('service_list_active');
   }
   console.log(slides_service_items[item])

}

var _playing = true;
var _pauseButton = document.getElementById('pause');
function _pauseSlideshow() {
   clearInterval(_slideInterval);
}
function _playSlideshow() {
   _slideInterval = setInterval(_nextSlide, 2000);
}
document.querySelector('.service-content').onmouseover = function () {
   _pauseSlideshow();
};
document.querySelector('.service-content').onmouseout = function () {
   _playSlideshow();
};


