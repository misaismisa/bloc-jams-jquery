$( document ).ready(function() {
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
    const totalTime = player.prettyTime(player.currentlyPlaying.duration); //added
    $('#time-control .total-time').text( totalTime ); //added
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') {return false;} //added false

  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const previousSongIndex = currentSongIndex - 1;
  if (currentSongIndex < 1) {return;} //changed

  const newSong = album.songs[previousSongIndex]; //change to newSong from previousSong
  player.playPause(newSong);
  $('#time-control .total-time').text( player.prettyTime(newSong.duration) ); //added
});

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') {return false;} //added false

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) {return;}

    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
    $('#time-control .total-time').text( player.prettyTime(newSong.duration) ); //added
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') {return;}
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( player.prettyTime(currentTime) );
    $('#time-control .total-time').text( player.prettyTime(duration) );
    $('#time-control input').val(percent);
  }, 1000);

});
