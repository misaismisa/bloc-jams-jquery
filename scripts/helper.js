class Helper {
  playPauseAndUpdate (song) {
    player.playPause();

    setInterval( () => {
      if (player.playState !== 'playing') {return;}
      const currentTime = player.getTime();
      const duration = player.getDuration();
      const percent = (currentTime / duration) * 100;
      $('#time-control .current-time').text( currentTime );
      $('#time-control .total-time').text( duration );
      $('#time-control input').val(percent);
    }, 1000);
  };

  player.playPause.replace (helper.playPauseAndUpdate);
}

const helper = new Helper();
