import products from './gallery-items.js';
console.log(products);

console.log(galleryPicture(products));
function galleryPicture(products) {
    return products.map(({ preview, original, description }) => {
        return
        `<li class="gallery_item">
            <a
                class="gallery_link"
                href="${original}"
            >
                <img
                    class="gallery_image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>` ;
    }).join('');
};
console.log(galleryPicture(products));
const galleryContainer = document.querySelector('.js-gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryPicture(products));