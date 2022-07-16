import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryWripperRef = document.querySelector('.gallery');
const marKupItemsGallery = makeGalleryOfMarKupElements(galleryItems);
galleryWripperRef.innerHTML = marKupItemsGallery;
galleryWripperRef.addEventListener('click', getUrlLargeImg);

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

function getUrlLargeImg(e) {
    e.preventDefault();
    const { target } = e;
    if (target.nodeName !== 'IMG') {
        return;
    };
    const urlLargeImg = target.dataset.source;
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${urlLargeImg}" width="1200" height="800"></img>
    </div>`)
    instance.show()
};