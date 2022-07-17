import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'
// Change code below this line
const galleryWripperRef = document.querySelector('.gallery');
const marKupItemsGallery = makeGalleryOfMarKupElements(galleryItems);
galleryWripperRef.innerHTML = marKupItemsGallery;
galleryWripperRef.addEventListener('click', openModalImg);

function makeGalleryOfMarKupElements (items) {
    return items.map(({ preview, original, description }) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
};

function openModalImg(e) {
    e.preventDefault();
    const { target } = e;
    if (target.nodeName !== 'IMG') {
        return;
    };
    const urlLargeImg = target.dataset.source;
  
    createModalLightBox(urlLargeImg); 
};

function createModalLightBox(ref) {
  const instance = basicLightbox.create(`
        <img src="${ref}" width="792" height="529"></img>`)
  instance.show()

  document.addEventListener('keydown', onKeyDown);
  function onKeyDown({code}) {
    if (code === 'Escape') {
    instance.close()
    document.removeEventListener('keydown', onKeyDown)
    }
  }
};
