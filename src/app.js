
const AddSong = require('./views/addSong');
const SongList = require('./views/songList');

const React = require('react');
const ReactDOM = require('react-dom');


ReactDOM.render(
  <div className="main">
    <AddSong/>
    <SongList/>
  </div>
  , document.getElementById('app'));


