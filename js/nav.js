const navBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const stick1 = document.querySelector('.stick-1');
const stick2 = document.querySelector('.stick-2');
const stickNone = document.querySelector('.stick-none');
let activeNav = false;

navBtn.addEventListener('click', () => {
  if (activeNav) {
    nav.style.transform = 'scale(0)';
    stick1.style.transform = '';
    stick2.style.transform = '';
    stickNone.style.opacity = '1';
    activeNav = false;
  } else {
    nav.style.transform = 'scale(1)';
    stick1.style.transform = 'rotate(-45deg) translateY(-3px)';
    stick2.style.transform = 'rotate(45deg) translateX(-1px)';
    stickNone.style.opacity = '0';
    activeNav = true;
  }
});
