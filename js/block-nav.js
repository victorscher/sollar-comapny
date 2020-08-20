(function () {
  //SELECTORS
  const main = document.querySelector('.main');
  const steps = main.querySelectorAll('section');

  //COUNTERS
  let curPosition = 0;
  let curStep = steps[curPosition];

  //EVENT LISTENERS

  swipedetect(main, function (swipedir) {
    if (swipedir == 'left') {
    } else if (swipedir == 'right') {
    } else if (swipedir == 'up') {
      swipeNext();
    } else if (swipedir == 'down') {
      swipePrev();
    }
  });

  main.addEventListener('wheel', function (e) {
    if (e.deltaY < 0) {
      scdir = 'down';
    } else if (e.deltaY > 0) {
      scdir = 'up';
    }
    e.stopPropagation();
  });

  main.addEventListener('wheel', function () {
    _scrollY();
  });

  window.addEventListener('load', function () {
    position();
  });

  //FUNCTIONS

  function position() {
    steps.forEach((step, index) => {
      if (index == curPosition) {
        step.style.transform = 'translateY(0)';
      } else if (index > curPosition) {
        step.style.transform = 'translateY(100%)';
      } else if (index < curPosition) {
        step.style.transform = 'translateY(-100%)';
      }
    });

    steps.forEach((step) => {
      step.style.transition = 'all 1s ease';
    });
  }

  function swipeNext() {
    if (curPosition < 4) {
      steps[curPosition].style.transform = 'translateY(-100%)';
      steps[curPosition + 1].style.transform = 'translateY(0)';
      curPosition++;
      curStep = steps[curPosition];
    }
  }

  function swipePrev() {
    if (curPosition > 0) {
      steps[curPosition].style.transform = 'translateY(100%)';
      steps[curPosition - 1].style.transform = 'translateY(0)';
      curPosition--;
      curStep = steps[curPosition];
    }
  }

  function _scrollY() {
    if (scdir === 'up' && curStep.getClientRects()[0].y == 0) {
      swipeNext();
    } else if (scdir === 'down' && curStep.getClientRects()[0].y == 0) {
      swipePrev();
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
