function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; //stops func from running for other keys
  audio.currentTime = 0; //this resets audio div so user can click audio file to play multiple times
  audio.play();
  key.classList.toggle('playing');
}
function removePlayingStyle(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlayingStyle));
window.addEventListener('keydown', playAudio);