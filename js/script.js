const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const photoInterior = document.getElementById('interior');
const loginButton = document.querySelector('.login-link');
const mapButton1 = document.querySelector('.find-map');
const mapButton2 = document.querySelector('.find-map2');
const modalLogin = document.querySelector('.login');
const modalMap = document.querySelector('.map');
const closeModalLogin = document.querySelector('.modal-close');
const closeModalMap = document.querySelector('.modal-close-map');
let countPages = 1;

if (forwardButton) {
  forwardButton.addEventListener('click', () => {
    countPages++;
    photoInterior.src = `img/interior${countPages}.jpg`;
    countPages === 3 ? countPages = 0 : 0;
  });
}

if (backButton) {
  backButton.addEventListener('click', () => {
    countPages--;
    countPages === 0 ? countPages = 3 : 0;
    photoInterior.src = `img/interior${countPages}.jpg`;
  });
}

loginButton.addEventListener('click', () => {
  modalLogin.classList.remove('hidden');
});

closeModalLogin.addEventListener('click', () => {
  modalLogin.classList.add('hidden');
});

if (mapButton1) {
  mapButton1.addEventListener('click', () => {
    modalMap.classList.remove('hidden');
  });
}

if (mapButton2) {
  mapButton2.addEventListener('click', () => {
    modalMap.classList.remove('hidden');
  });
}

if (closeModalMap) {
  closeModalMap.addEventListener('click', () => {
    modalMap.classList.add('hidden');
  });
}
