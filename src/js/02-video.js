const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  });


const useCurrentTime = () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime){
    player.setCurrentTime(currentTime);
  }
};
useCurrentTime();



player.on('timeupdate', _.throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));
