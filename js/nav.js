const navBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const stick1 = document.querySelector('.stick-1');
const stick2 = document.querySelector('.stick-2');
const stickTop = document.querySelector('.stick-top');
const stickBottom = document.querySelector('.stick-bottom');
let activeNav = false;

navBtn.addEventListener('click', () => {
  if (activeNav) {
    nav.style.transform = 'scale(0)';
    stick1.style.transform = '';
    stick2.style.transform = '';
    stickTop.style.opacity = '1';
    stickBottom.style.opacity = '1';
    activeNav = false;
  } else {
    nav.style.transform = 'scale(1)';
    stick1.style.transform = 'rotate(45deg)';
    stick2.style.transform = 'rotate(-45deg)';
    stickTop.style.opacity = '0';
    stickBottom.style.opacity = '0';
    activeNav = true;
  }
});
