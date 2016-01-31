var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {

    }
  },

  render: function() {
    return (
      <div className="song">
        <div className="song__url">
          {this.props.song_url}
        </div>
        <div className="song__msg">
          {this.props.msg}
        </div>
        <div className="song__intensity">
          {this.props.intensity}
        </div>
        <div className="song__artist_info">
          {this.props.artist_info}
        </div>
      </div>

    )
  }

})
