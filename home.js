import products from "./gallery-items.js";
console.log(products);

console.log(galleryPicture(products));
function galleryPicture(products) {
    return products.map(({ preview, original, description }) => {
        return
        `<li class="gallery__item">
            <a
                class="gallery__link"
                href="${original}"
            >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${preview}"
                />
            </a>
        </li>` ;
    }).join('');
}
const galleryContainer = document.querySelector('.js-gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryPicture);