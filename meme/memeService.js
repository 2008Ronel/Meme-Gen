let gMeme = {
  image: 'gallery/3.jpg',
  text: {
    top: 'Hello World',
    bottom: 'Bye',
    size: 16,
    color: '000#',
  },
};

function setFontSize(diff) {
  gMeme.text.size += diff;
  console.log('sss');
}

function setFontColor(color) {
  gMeme.text.color = color;
}
