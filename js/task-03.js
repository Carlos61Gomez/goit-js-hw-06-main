const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=100&w=100",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=100&w=100",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=100&w=100",
    alt: "Group of Horses Running",
  },
];

const galleryElement = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    (image) => `
      <li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}">
      </li>
    `
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);