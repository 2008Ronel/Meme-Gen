function setMeme(image) {
  gMeme = {
    image,
    text: {
      top: '',
      bottom: '',
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

    gCtx.font = '30px Arial';
    gCtx.fillText(meme.text.top, 100, 50);
    gCtx.fillText(meme.text.bottom, 100, 400);
    // ctx.textAlign = 'center';
    gCtx.fillStyle = '000#';
  };
}

// function updateMeme() {}

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
