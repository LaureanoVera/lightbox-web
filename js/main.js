const images = document.querySelectorAll('.container-grid__img');
const containerImage = document.querySelector('.container-grid__content-img');
const imageContainer = document.querySelector('.container-grid__img-show');
const copy = document.querySelector('.container-grid__copy');
const close = document.querySelector('.container-grid__cross');

images.forEach (img => {
  img.addEventListener('click', () => {
    addImage(img.getAttribute('src'), img.getAttribute('alt'));
  });
});

const addImage = (srcImg, altImg) => {
  containerImage.classList.toggle('container-grid__img-move');
  imageContainer.classList.toggle('container-grid__img-show--scale');
  imageContainer.src = srcImg;
  copy.innerHTML = altImg;
}

close.addEventListener('click', () => {
  containerImage.classList.toggle('container-grid__img-move');
  imageContainer.classList.toggle('container-grid__img-show--scale');
});

