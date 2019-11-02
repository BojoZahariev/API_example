const img = document.getElementById('img');
const buttonNewGif = document.getElementById('newGif');
let keyWord = 'dog';

const giffys = () => {
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=B2sknp7nYaRlopzefXO01xnnlFymv0zN&s=' + keyWord, {
    mode: 'cors'
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    })

    .catch(err => alert(err));
};

giffys();

buttonNewGif.addEventListener('click', giffys);
