var Firebase = require('firebase');

var songsRef = new Firebase('https://soundcloud-wrap.firebaseio.com/');


module.exports = {
  saveSong: function(songModel) {
    songsRef.add(songModel);
  },

}
