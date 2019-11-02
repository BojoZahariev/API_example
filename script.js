const img = document.getElementById('img');
const buttonNewGif = document.getElementById('newGif');
const buttonSubmit = document.getElementById('submit');
const input1 = document.getElementById('input1');

const giffys = keyWord => {
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

giffys('dog');

buttonNewGif.addEventListener('click', () => {
  giffys(input1.value);
});

buttonSubmit.addEventListener('click', () => {
  giffys(input1.value);
});
