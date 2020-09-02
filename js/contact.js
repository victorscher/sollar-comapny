const select = document.getElementById('city');
const whatsBtn = document.getElementById('whatsapp');

select.addEventListener('change', (e) => {
  if (select.value != '') {
    whatsBtn.href = `https://api.whatsapp.com/send?phone=${select.value}&text=Ol%C3%A1%2C%20estava%20olhando%20o%20site%20de%20voc%C3%AAs%20e%20gostaria%20de%20obter%20um%20or%C3%A7amento`;
    whatsBtn.style.color = '#da7d21';
    whatsBtn.style.textDecoration = 'none';
    whatsBtn.style.pointerEvents = 'initial';
  } else {
    whatsBtn.style.color = 'gray';
    whatsBtn.style.pointerEvents = 'none';
  }
});
