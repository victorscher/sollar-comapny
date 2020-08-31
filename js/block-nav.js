(function () {
  //SELECTORS
  const main = document.querySelector('.main');
  const steps = main.querySelectorAll('section');

  if (window.innerWidth < 1025) {
    var navgator = document.querySelector('.navgator-mob');
  } else {
    var navgator = document.querySelector('.navgator-desk');
  }

  console.log(navgator);

  const pos1 = navgator.querySelector('.screen-1');
  const pos2 = navgator.querySelector('.screen-2');
  const pos3 = navgator.querySelector('.screen-3');
  const pos4 = navgator.querySelector('.screen-4');
  const pos5 = navgator.querySelector('.screen-5');
  const pointer = navgator.querySelector('.pointer-box');

  //COUNTERS
  let curPosition = 0;
  let curStep = steps[curPosition];

  //EVENT LISTENERS
  pos1.addEventListener('click', () => {
    pointer.style.transform = 'translateY(0%)';
    let = curPosition = 0;
    curStep = steps[curPosition];
    position();
  });

  pos2.addEventListener('click', () => {
    pointer.style.transform = 'translateY(100%)';
    let = curPosition = 1;
    curStep = steps[curPosition];
    position();
  });

  pos3.addEventListener('click', () => {
    pointer.style.transform = 'translateY(200%)';
    let = curPosition = 2;
    curStep = steps[curPosition];
    position();
  });

  pos4.addEventListener('click', () => {
    pointer.style.transform = 'translateY(300%)';
    let = curPosition = 3;
    curStep = steps[curPosition];
    position();
  });

  pos5.addEventListener('click', () => {
    pointer.style.transform = 'translateY(400%)';
    let = curPosition = 4;
    curStep = steps[curPosition];
    position();
  });

  pointer.addEventListener('transitionend', () => {
    if (activeNav) {
      navBtn.click();
    }
  });

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

      if (curPosition == 0) {
        navgator.style.opacity = 0;
      } else {
        navgator.style.opacity = 1;
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
      pointer.style.transform = `translateY(${curPosition}00%)`;
      curStep = steps[curPosition];
    }
  }

  function swipePrev() {
    if (curPosition > 0) {
      steps[curPosition].style.transform = 'translateY(100%)';
      steps[curPosition - 1].style.transform = 'translateY(0)';
      curPosition--;
      pointer.style.transform = `translateY(${curPosition}00%)`;
      curStep = steps[curPosition];
    }
  }

  function _scrollY() {
    if (scdir === 'up' && curStep.getClientRects()[0].y == 0) {
      swipeNext();
    } else if (scdir === 'down' && curStep.getClientRects()[0].y == 0) {
      swipePrev();
    }

    if (curPosition == 0) {
      navgator.style.opacity = 0;
    } else {
      navgator.style.opacity = 1;
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
