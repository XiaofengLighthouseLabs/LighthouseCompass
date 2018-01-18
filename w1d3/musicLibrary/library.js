var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var p in library.playlists){
    var list = library.playlists[p];
  console.log (p +": "+ list['name'] + "-" + list['tracks'].length + " tracks");
  }
}

printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var t in library.tracks){
    var tracks = library.tracks[t];
    console.log (t + ': ' + tracks.name + ' by ' + tracks.artist + ' (' + tracks.album + ')')
  }
}
 printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlistObj = library.playlists[playlistId];
  console.log(playlistId +": "+ playlistObj['name'] + "-" + playlistObj['tracks'].length + " tracks");

   var trackIds = playlistObj.tracks;
   for (i = 0; i < trackIds.length; i++){
    var trackId = trackIds[i];

    var track =library.tracks[trackId];

    console.log (trackIds[i] + ': ' + track.name + ' by ' + track.artist + ' (' + track.album + ')')
  }
}
printPlaylist("p01");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
   var existPlaylist = library.playlists[playlistId];
   existPlaylist.tracks.push(trackId);
   console.log (existPlaylist.tracks);

}
addTrackToPlaylist ("t03", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {

  var newID = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  console.log (newID);
  return newID;
}
 uid();

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrackID = uid();

  var newTrack ={
    id : newTrackID,
    name : name,
    artist : artist,
    album : album
  };
  return newTrack;

  }

console.log(addTrack ("a","b","c"));

// adds a playlist to the library

  var addPlaylist = function (name) {
  var newPlaylistID = uid();
  var newPlaylist = {
    id : newPlaylistID,
    name: name,
    tracks : []
  }
  return newPlaylist;
}
console.log (addPlaylist("papa"));



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
// loop tracks
for (var trackID in library.tracks){
  if((library.tracks[trackID].name.search(query) == -1) &&
      (library.tracks[trackID].artist.search(query) == -1) &&
        (library.tracks[trackID].album.search(query) == -1)) {
        console.log ("No Match!");
      } else {
        console.log (library.tracks[trackID]);
        break;
      }
    }
  }
  printSearchResults("Code");