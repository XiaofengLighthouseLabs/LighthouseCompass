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
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists : function () {
    for (var p in this.playlists){
      var list = this.playlists[p];
     console.log (p +": "+ list['name'] + "-" + list['tracks'].length + " tracks");
    }
  },



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks : function () {
    for (var t in this.tracks){
      var tracks = this.tracks[t];
      console.log (t + ': ' + tracks.name + ' by ' + tracks.artist + ' (' + tracks.album + ')')
    }
  },



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

   printPlaylist : function (playlistId) {
    var playlistObj = this.playlists[playlistId];
    console.log(playlistId +": "+ playlistObj['name'] + "-" + playlistObj['tracks'].length + " tracks");

     var trackIds = playlistObj.tracks;
     for (i = 0; i < trackIds.length; i++){
     var trackId = trackIds[i];

     var track =this.tracks[trackId];

      console.log (trackIds[i] + ': ' + track.name + ' by ' + track.artist + ' (' + track.album + ')')
    }
  },

// adds an existing track to an existing playlist

  addTrackToPlaylist : function (trackId, playlistId) {
    var existPlaylist = this.playlists[playlistId];
    existPlaylist.tracks.push(trackId);
    console.log (existPlaylist.tracks);
  },

// generates a unique id
// (use this for addTrack and addPlaylist)

  uid : function() {

    var newID = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    console.log (newID);
    return newID;
  },


// adds a track to the library

  addTrack : function (name, artist, album) {
    var newTrackID = this.uid();

    var newTrack ={
      id : newTrackID,
      name : name,
      artist : artist,
      album : album
    };
    return newTrack;
  },
  // console.log(addTrack ("a","b","c"));

// adds a playlist to the library

  addPlaylist : function (name) {
     var newPlaylistID = this.uid();
     var newPlaylist = {
       id : newPlaylistID,
       name: name,
       tracks : []
    }
    return newPlaylist;
  },
  // console.log (addPlaylist("papa"));

  // STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


 printSearchResults : function(query) {
  // loop tracks
    for (var trackID in this.tracks){
      if((this.tracks[trackID].name.search(query) == -1) &&
        (this.tracks[trackID].artist.search(query) == -1) &&
        (this.tracks[trackID].album.search(query) == -1)) {
          console.log ("No Match!");
      } else {
         console.log (library.tracks[trackID]);
         break;
        }
     }
    }


}

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist ("t03", "p01");
library.uid();
console.log(library.addTrack("a", "b", "c"));
console.log(library.addPlaylist("papa"));
library.printSearchResults("Code");