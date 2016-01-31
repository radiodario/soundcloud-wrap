var React = require('react')
var Firebase = require('firebase');
var Song = require('./song');
var baseRef = new Firebase('https://soundcloud-wrap.firebaseio.com/');
var Player = require('./player');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      loading: true,
      selected_song: '',
      songs: []
    };

  },

  componentWillMount: function() {
    var that = this;
    baseRef.on("value", function(snapshot) {
      const songs = snapshot.val();
      const songsArray = Object.keys(songs)
        .map(function(k) {
          return songs[k];
        });
      that.setState({songs: songsArray});
    })

  },

  handlePlaySong: function(song) {
    debugger;
    this.setState({selected_song: song.song_url});
  },

  render: function() {
    var that = this;
    var songs = this.state.songs.map(function (song, i) {
      return (
        <Song {...song} onPlay={that.handlePlaySong} key={i} />
      );
    });

    return (
      <div className="songs">
        <h2>Player</h2>
        <Player song={this.state.selected_song}/>
        <h1>Songs</h1>
        <div className="songs__list">
          {songs}
        </div>
      </div>
    );

  }

})
