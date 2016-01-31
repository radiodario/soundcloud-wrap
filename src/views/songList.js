var React = require('react')
var Firebase = require('firebase');
var Song = require('./song');
var baseRef = new Firebase('https://soundcloud-wrap.firebaseio.com/');


module.exports = React.createClass({

  getInitialState: function() {
    return {
      loading: true,
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

  render: function() {
    var songs = this.state.songs.map(function (song, i) {
      return (
        <Song {...song} key={i} />
      );
    });

    return (
      <div className="songs">
        <h1>Songs</h1>
        <div className="songs__list">
          {songs}
        </div>
      </div>
    );

  }

})
