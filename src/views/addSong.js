var React = require('react');
var Firebase = require('firebase');
var SC = require('soundcloud');

var baseRef = new Firebase('https://soundcloud-wrap.firebaseio.com/');

SC.initialize({
  client_id: 'b74dfdbbfcb2f6302c489e10180b74fd',
});

module.exports = React.createClass({

  getInitialState: function() {
    return {
      song_url : '',
      intensity: 5,
      msg: '',
      player_time: 0,
      artist_info: ''
    }
  },

  saveSong: function() {
    var that = this;
    SC.resolve(this.state.song_url)
    .then(function (song){
      debugger
      that.setState(song);
      baseRef.push(that.state);
    });
  },

  handleUrlChange: function(event) {
    this.setState({song_url: event.target.value});
  },

  handleIntensityUpdate: function(event) {
    this.setState({intensity: event.target.value});
  },

  handleMsgChange: function(event) {
    this.setState({msg: event.target.value});
  },

  handleArtistInfoChange: function(event) {
    this.setState({artist_info: event.target.value})
  },

  render: function() {

    return (
      <div className="song__form">
        <h1>Add a song</h1>
        <div className="player"></div>
        <h3>Song Url</h3>
        <input type="text"
          value={this.state.song_url}
          onChange={this.handleUrlChange}
        />
        <h3>Intensity</h3>
        <input type="range"
          className="intensity-slider"
          type="range"
          id="intensity-slider"
          min="0"
          value={this.state.intensity}
          max="10"
          onChange={this.handleIntensityUpdate}
          step="1"
        />
        <h3>Info</h3>
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>

        <div>
          <button
            onClick={this.saveSong}
            >
            Save Song
          </button>
        </div>
      </div>
    )


  }
})
