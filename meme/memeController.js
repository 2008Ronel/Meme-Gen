function setMeme(image) {
  gMeme = {
    image,
    text: {
      top: '',
      bottom: '',
      size: 16,
      color: color,
    },
  };

  renderMeme();
}

function getMeme() {
  return gMeme;
}

function renderMeme() {
  const meme = getMeme();

  gElCanvas = document.getElementById('canvas');
  gCtx = gElCanvas.getContext('2d');
  const image = new Image();
  image.src = meme.image;

  image.onload = () => {
    gCtx.drawImage(image, 0, 0);

    gCtx.font = `${meme.text.size}px Arial`;
    gCtx.fillText(meme.text.top, 100, 50);
    gCtx.fillText(meme.text.bottom, 100, 400);
    gCtx.fillStyle = `${meme.text.color}`;
  };
}

function addText() {
  const text = document.getElementById('text').value;

  const meme = getMeme();
  if (meme.text.top === 'Hello World' || !meme.text.top) {
    meme.text.top = text;
  } else {
    meme.text.bottom = text;
  }

  renderMeme();
}

function onIncrease(diff) {
  setFontSize(diff);
  renderMeme();
}

function onDecrease(diff) {
  setFontSize(diff);
  renderMeme();
}

function onSetColor(color) {
  setFontColor(color);
  renderMeme();
}

var gallery = document.querySelector('.gallery');
var change = document.querySelector('.changeOpen');
var change2 = document.querySelector('.changeClose');
function showGallery() {
  if ((gallery.style.display = 'none')) {
    gallery.style.display = 'block';
    change.style.display = 'none';
    change2.style.display = 'block';
  }
}

function hideGallery() {
  if ((gallery.style.display = 'block')) {
    gallery.style.display = 'none';
    change.style.display = 'block';
    change2.style.display = 'none';
  }
}
