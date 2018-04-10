const image = document.querySelector('a-image');
const quote = document.querySelector('.quote');

quote.addEventListener('click', function() {
  image.src('https://blog.emojipedia.org/content/images/2016/04/emojipedia-colbert-emoji-sample.png');
})