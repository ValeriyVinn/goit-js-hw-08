import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const LOCAL_TIME_SET = 'videoplayer-current-time';
const localTime = localStorage.getItem(LOCAL_TIME_SET);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localTime) {
  player.setCurrentTime(localTime);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate({ seconds }) {
  localStorage.setItem(LOCAL_TIME_SET, seconds);
}
