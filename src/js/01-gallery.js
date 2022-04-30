// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryBlock = document.querySelector('div.gallery');

const galleryItemsCreate = galleryItems
  .map(image => {
    return ` <a  href="${image.original}" class="gallery__item"><img src="${image.preview}" alt="${image.description}"  class="gallery__image"></a>`;
  })
  .join('');

galleryBlock.innerHTML = galleryItemsCreate;

new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
