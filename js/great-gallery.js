import collection from "../gallery-items.js"

const gallery = document.querySelector(".js-gallery")

const greatElementItem = collection
	.map(({ original, preview, description }) => {
		const creatElement = `<li class="gallery__item">
    <a class="gallery__link"
    href=${original}>
    <img class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}/>
  </a>
</li>`

		return creatElement
	})
	.join("")

gallery.insertAdjacentHTML("afterbegin", greatElementItem)
