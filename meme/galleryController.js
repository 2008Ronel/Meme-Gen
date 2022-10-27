const images = [
  'gallery/1.jpg',
  'gallery/2.jpg',
  'gallery/3.jpg',
  'gallery/4.jpg',
  'gallery/5.jpg',
  'gallery/6.jpg',
  'gallery/7.jpg',
  'gallery/8.jpg',
  'gallery/9.jpg',
  'gallery/10.jpg',
  'gallery/11.jpg',
  'gallery/12.jpg',
  'gallery/13.jpg',
  'gallery/14.jpg',
  'gallery/15.jpg',
  'gallery/16.jpg',
  'gallery/17.jpg',
  'gallery/18.jpg',
];

function renderImages() {
  const galleryEl = document.getElementById('gallery');
  images.forEach((image) => {
    const imageEl = document.createElement('img');
    imageEl.src = image;
    imageEl.onclick = function () {
      setMeme(image);
    };
    galleryEl.appendChild(imageEl);
  });
}
