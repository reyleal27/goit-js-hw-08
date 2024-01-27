import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './js/gallery-items.js';

const galleryImg = document.querySelector(".gallery");

const images = galleryItems.map((galleryItem) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`
});

galleryImg.insertAdjacentHTML("beforeend", images.join(""));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
});

const gallerySlide = $('.gallery a').simpleLightbox();

gallerySlide.next();    

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    lightbox.prev();
  }

  if (event.key === 'ArrowRight') {
    lightbox.next();
  }
});
