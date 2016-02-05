var SC = require('soundcloud');
var React = require('react');
var Visualizer = require('./visualizer');

SC.initialize({
  client_id: 'b74dfdbbfcb2f6302c489e10180b74fd',
});

module.exports = React.createClass({

  getInitialState : function() {
    return {
      title: null,
      player: null
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.loadSong(nextProps.song);
  },

  loadSong: function(song_url) {
    if (!song_url) return;
    var that = this;
    SC.resolve(song_url)
    .then(function (song){
      SC.stream('/tracks/' + song.id)
        .then(function (player) {
          that.player = player;
          that.player.play();
          console.log("play!");
					debugger;
          that.setState(song);
        });
    });
  },

  handlePlay: function() {
    if (this.player) {
      this.player.play();
    }
  },

  handlePause: function() {
    if (this.player) {
      this.player.pause();
    }
  },

  render: function() {

    return (
      <div className="player">
				<Visualizer/>
        <h3 className="player__trackName">
          Now Playing: {this.state.title}
        </h3>
        <button
          className="player_play"
          onClick={this.handlePlay}
          >play</button>
        <button className="player_pause"
          onClick={this.handlePause}
          >pause</button>
      </div>
    )


  }

});
