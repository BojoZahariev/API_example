const img = document.getElementById('img');
const buttonNewGif = document.getElementById('newGif');
const buttonSubmit = document.getElementById('submit');
const input1 = document.getElementById('input1');

const giffys = async keyWord => {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=B2sknp7nYaRlopzefXO01xnnlFymv0zN&s=' + keyWord,
      {
        mode: 'cors'
      }
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (err) {
    alert(err);
  }
};

giffys('dog');

buttonNewGif.addEventListener('click', () => {
  if (input1.value) {
    giffys(input1.value);
  } else {
    giffys('dog');
  }
});

buttonSubmit.addEventListener('click', () => {
  giffys(input1.value);
});
