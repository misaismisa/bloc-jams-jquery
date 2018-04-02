class Helper {
  playPauseAndUpdate (song) {
    helper.playPauseAndUpdate();

    $('#time-control input').on('input', function (event) {
      player.skipTo(event.target.value);
    });

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

}

const helper = new Helper();
