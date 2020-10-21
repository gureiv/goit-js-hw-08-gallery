import products from './gallery-items.js';
console.log(products);
const galleryContainer = document.querySelector('.js-gallery');
const galleryImage = galleryPicture(products);
galleryContainer.insertAdjacentHTML('beforeend', galleryImage);
function galleryPicture(products) {
    return products
        .map(({ preview, original, description }) => {
         let i = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
            return i;
        })
        .join("");
}

galleryContainer.addEventListener('click', onClick);
const lightBox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    } 
    console.log(evt.target.alt);
    lightBox.classList.add('is-open');
    lightboxImage.src = evt.target.dataset.source;
    lightboxImage.alt = evt.target.alt;
}


const closeModal = document.querySelector('button[data-action="close-lightbox"]');
closeModal.addEventListener('click', onCloseModal);
function onCloseModal(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    } 
    lightBox.classList.remove('is-open');
    lightboxImage.src = '';
    lightboxImage.alt = '';
}
