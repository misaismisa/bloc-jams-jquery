$( document ).ready(function() {

var helper = class Helper {
  playPauseAndUpdate (song) => {
    player.playPause();
    $('#time-control .total-time').text( totalTime );
  };
  helper.playPauseAndUpdate(player.playPause);
};
}
