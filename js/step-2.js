(function () {
  //SELECTORS
  const step2 = document.querySelector('.step-2');
  const slider = document.querySelector('.slider');
  const cards = slider.querySelectorAll('.card');

  //COUNTERS
  let curPosition = 0;
  let curCard = cards[curPosition];

  //EVENT LISTENERS

  swipedetect(slider, function (swipedir) {
    if (swipedir == 'left') {
      swipeNext();
    } else if (swipedir == 'right') {
      swipePrev();
    } else if (swipedir == 'up') {
      console.log('up');
    } else if (swipedir == 'down') {
      console.log('down');
    }
  });

  window.addEventListener('load', function () {
    if (window.innerWidth <= 1024) {
      position();
    }
  });

  //FUNCTIONS

  function position() {
    cards.forEach((card, index) => {
      if (index == curPosition) {
        card.style.transform = 'translateX(0)';
      } else if (index > curPosition) {
        card.style.transform = 'translateX(105%)';
      } else if (index < curPosition) {
        card.style.transform = 'translateX(-100%)';
      }
    });

    cards.forEach((card) => {
      card.style.transition = 'all 1s ease';
    });
  }

  function swipeNext() {
    if (curPosition < 3) {
      cards[curPosition].style.transform = 'translateX(-105%)';
      cards[curPosition + 1].style.transform = 'translateY(0)';
      curPosition++;
      curStep = cards[curPosition];
    }
  }

  function swipePrev() {
    if (curPosition > 0) {
      cards[curPosition].style.transform = 'translateX(105%)';
      cards[curPosition - 1].style.transform = 'translateY(0)';
      curPosition--;
      curStep = cards[curPosition];
    }
  }

  function swipedetect(el, callback) {
    var touchsurface = el,
      swipedir,
      startX,
      startY,
      distX,
      distY,
      threshold = 75, //required min distance traveled to be considered swipe
      restraint = 200, // maximum distance allowed at the same time in perpendicular direction
      allowedTime = 500, // maximum time allowed to travel that distance
      elapsedTime,
      startTime,
      handleswipe = callback || function (swipedir) {};

    touchsurface.addEventListener(
      'touchstart',
      function (e) {
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime(); // record time when finger first makes contact with surface
      },
      false,
    );

    touchsurface.addEventListener(
      'touchend',
      function (e) {
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime; // get time elapsed
        if (elapsedTime <= allowedTime) {
          // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            // 2nd condition for horizontal swipe met
            swipedir = distX < 0 ? 'left' : 'right'; // if dist traveled is negative, it indicates left swipe
          } else if (
            Math.abs(distY) >= threshold &&
            Math.abs(distX) <= restraint
          ) {
            // 2nd condition for vertical swipe met
            swipedir = distY < 0 ? 'up' : 'down'; // if dist traveled is negative, it indicates up swipe
          }
        }
        handleswipe(swipedir);
      },
      false,
    );
  }
})();
