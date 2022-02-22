'use strict';

document.addEventListener('keydown', function (e) {
  const keyCode = e.keyCode;
  console.log(e);
  console.log(keyCode);
  const audio = document.querySelector(`audio[data-key='${keyCode}']`);
  const key = document.querySelector(`div[data-key='${keyCode}']`);
  if (!audio) return;
  key.classList.add('playing');
  console.log(audio);
  console.log(key);
  audio.currentTime = 0; //every time any ey is pressed it will set sound to beginnign rather than continuning from the previous going sound
  audio.play(); //play the sound
});
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key =>
  key.addEventListener('transitionend', function (e) {
    //transitionend event
    //the propertyNAme read-only prop of TranstionEvent objects
    if (e.propertyName !== 'transform') return;
    console.log(e.propertyName);

    key.classList.remove('playing'); //else return
  })
);
