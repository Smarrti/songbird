import winSound from '../../assets/win.mp3';
import loseSound from '../../assets/lose.mp3';

export default function (typeSound) {
  let src = '';
  switch (typeSound) {
    case 'lose':
      src = loseSound;
      break;
    case 'win':
      src = winSound;
      break;
    default:
      break;
  }
  const audio = new Audio();
  audio.src = src;
  audio.play();
}
