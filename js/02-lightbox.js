import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWripperRef = document.querySelector('.gallery');
const marKupItemsGallery = makeGalleryOfMarKupElements(galleryItems);
galleryWripperRef.innerHTML = marKupItemsGallery;
// galleryWripperRef.addEventListener('click', openModalImg);

function makeGalleryOfMarKupElements (items) {
    return items.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`)
    .join('');
};

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
// function openModalImg(e) {
//     e.preventDefault();
//     const { target } = e;
//     if (target.nodeName !== 'IMG') {
//         return;
//     };
//     createModalLightBox();
// };

// function createModalLightBox() {
//     const gallery = new SimpleLightbox('.gallery a');

// };