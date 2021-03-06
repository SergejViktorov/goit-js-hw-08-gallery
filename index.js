import collection from './gallery-items.js'

const galleryEl = document.querySelector('.js-gallery')
const modalEl = document.querySelector('.js-lightbox')
const btnCloseModal = document.querySelector('[data-action]')
const imgModal = document.querySelector('.lightbox__image')
const backdrop = document.querySelector('div.lightbox__overlay')
const cardsMarkup = greatCardsMarkup(collection)

galleryEl.insertAdjacentHTML('afterbegin', cardsMarkup)
btnCloseModal.addEventListener('click', onCloseModalClick)
backdrop.addEventListener('click', closeOnBackdrop)
galleryEl.addEventListener('click', onPalettGalleryClick)

function greatCardsMarkup(collection) {
	return collection
		.map(({ preview, original, description }, index) => {
			return `<li class="gallery__item">
    <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
	  data-index="${index}">
  </a>
</li>`
		})
		.join('')
}

function onPalettGalleryClick(evt) {
	if (!evt.target.classList.contains('gallery__image')) {
		return evt.target.dataset.source
	}
	evt.preventDefault()
	modalEl.classList.add('is-open')
	imgModal.src = evt.target.dataset.source
	window.addEventListener('keydown', onEscCloseModal)
}

function onCloseModalClick(evt) {
	modalEl.classList.remove('is-open')
	imgModal.src = ''
	window.removeEventListener('keydown', onEscCloseModal)
}

function closeOnBackdrop(evt) {
	if (evt.target === evt.currentTarget) {
		onCloseModalClick(evt)
	}
}

function onEscCloseModal(evt) {
	if (evt.code === 'Escape') {
		onCloseModalClick(evt)
	}
}
