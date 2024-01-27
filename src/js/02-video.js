const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  });


player.on('getCurrentTime', function() {
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
});


player.on('timeupdate', _.throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));
