class MusicLibrary{
  constructor(name, creator){
    this.libraryName = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist(playlist){
    this.playlists.push(playlist);
  }

}

class Playlist{
  constructor(name, tracks){
    this.name = name;
    this.tracks = [];
  }

  overallRating () {
    let overallRating = 0;
    this.tracks.forEach((track) => {
      totalRating += track.rating;
    });
    overalRating = totalRating / this.tracks.length;
    return overallRating;
    }

  totalDuration (){
      let totalDuration = 0;
      this.tracks.forEach((track) =>{
        totalDuration += track.length;
      });
      return totalDuration;
    }
  addTrack(track){
    this.tracks.push(track);
  }

}


class Track{
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;

  }
}

const playlist1 = new Playlist('Coding Music');
const playlist2 = new Playlist('Other Playlist');
const track1 = new Track('Code Monkey', 4, 300, );
const track2 = new Track('Model View Controller', 5, 200, );
const track3 = new Track('Four Thirty-Three', 4, 400, );
const myLibrary = new MusicLibrary('Music', 'Me');

playlist1.addTrack(track1);
playlist1.addTrack(track2);
console.log(playlist1);

playlist2.addTrack(track3);
console.log(playlist2);


myLibrary.addPlaylist(playlist1);
myLibrary.addPlaylist(playlist2);
console.log(myLibrary.playlists[0],myLibrary.playlists[1]);







