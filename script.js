const image = document.querySelector('a-image');
console.log(image);
const quote = document.querySelector('.quote');

quote.addEventListener('click', function() {
  image.setAttribute('src', 'group.jpg');
})