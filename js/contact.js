const select = document.getElementById('city');
const whatsBtn = document.getElementById('whatsapp');
const localizationBtn = document.getElementById('localization');

select.addEventListener('change', (e) => {
  if (select.value != '') {
    whatsBtn.href = `https://api.whatsapp.com/send?phone=${select.value}`;
    whatsBtn.style.color = '#da7d21';
    whatsBtn.style.textDecoration = 'none';
    whatsBtn.style.pointerEvents = 'initial';
    localizationBtn.style.color = '#da7d21';
    localizationBtn.style.textDecoration = 'none';
    localizationBtn.style.pointerEvents = 'initial';
  } else {
    whatsBtn.style.color = 'gray';
    whatsBtn.style.pointerEvents = 'none';
    localizationBtn.style.color = 'gray';
    localizationBtn.style.pointerEvents = 'none';
  }

  if (select.value == '557734512150') {
    city = 'gbi';
    logradouro.textContent = gbi.logradouro;
    bairro.textContent = gbi.bairro;
    cep.textContent = gbi.cep;
    initMap();
  } else if (select.value == '5577999760046') {
    city = 'bar';
    logradouro.textContent = bar.logradouro;
    bairro.textContent = bar.bairro;
    cep.textContent = bar.cep;
    initMap();
  } else if (select.value == '5577999610770') {
    city = 'vca';
    logradouro.textContent = vca.logradouro;
    bairro.textContent = vca.bairro;
    cep.textContent = vca.cep;
    initMap();
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

const modal = document.querySelector('.map-modal');
const close = modal.querySelector('.close');

const logradouro = document.querySelector('.logradouro');
const bairro = document.querySelector('.bairro');
const cep = document.querySelector('.cep');

const gbi = {
  logradouro: 'Av. Barão do Rio Branco, N° 1972,',
  bairro: 'São Fransisco, Guanambi, Bahia,',
  cep: '46430-000',
};

const bar = {
  logradouro: 'Rua Coronel Magno, N° 636,',
  bairro: 'Centro, Barreiras, Bahia',
  cep: '47800-166',
};

const vca = {
  logradouro: 'Av. Juracy Magalhães, N° 389,',
  bairro: 'Felicia, Vitória da Conquista, Bahia,',
  cep: '45023-490',
};

localizationBtn.addEventListener('click', () => {
  modal.style.transform = 'scale(1)';
  modal.style.opacity = '1';
});

close.addEventListener('click', () => {
  modal.style.transform = 'scale(0)';
  modal.style.opacity = '0';
});

modal.addEventListener('transitionend', (e) => {
  if (e.propertyName == 'transform') {
    initMap();
  }
});

let city = '';

function initMap() {
  // The locations
  let gbi = { lat: -14.2097524, lng: -42.7694645 };
  let bar = { lat: -12.1475489, lng: -44.9952351 };
  let vca = { lat: -14.8675967, lng: -40.8444244 };

  // The map
  if (city == 'gbi') {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: gbi,
    });
    var marker = new google.maps.Marker({ position: gbi, map: map });
  } else if (city == 'bar') {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: bar,
    });
    var marker = new google.maps.Marker({ position: bar, map: map });
  } else if (city == 'vca') {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: vca,
    });
    var marker = new google.maps.Marker({ position: vca, map: map });
  }
}
