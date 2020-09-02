const select = document.getElementById('city');
const whatsBtn = document.getElementById('whatsapp');

select.addEventListener('change', (e) => {
  if (select.value != '') {
    whatsBtn.href = `https://api.whatsapp.com/send?phone=${select.value}`;
    whatsBtn.style.color = '#da7d21';
    whatsBtn.style.textDecoration = 'none';
    whatsBtn.style.pointerEvents = 'initial';
  } else {
    whatsBtn.style.color = 'gray';
    whatsBtn.style.pointerEvents = 'none';
  }
});

const select2 = document.getElementById('city2');
const whatsBtn2 = document.getElementById('whatsapp2');

select2.addEventListener('change', (e) => {
  if (select2.value != '') {
    whatsBtn2.href = `https://api.whatsapp.com/send?phone=${select2.value}`;
    whatsBtn2.style.color = '#31709e';
    whatsBtn2.style.textDecoration = 'none';
    whatsBtn2.style.pointerEvents = 'initial';
  } else {
    whatsBtn2.style.color = 'gray';
    whatsBtn2.style.pointerEvents = 'none';
  }
});
