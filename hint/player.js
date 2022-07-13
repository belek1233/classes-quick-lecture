class Player {
  constructor({ playlist, currentTrackIndex }) {
    this.playlist = [...playlist];
    this.currentTrackIndex = currentTrackIndex;
  }

  numberOfTracks() {
    return this.playlist.length;
  }

  play(trackName) {
    if (this.playlist.find((track) => track.title === trackName)) {
      this.currentTrackIndex = this.playlist.findIndex((track) => track.title === trackName);
      return true;
    }
    return false;
  }

  get tracksLeft() {
    return this.playlist.length - this.currentTrackIndex - 1;
  }

  sortByLength() {
    this.playlist.sort((a, b) => a.duration - b.duration);
  }

  get totalDuration() {
    return this.playlist.reduce((acc, cur) => acc + cur.duration, 0);
  }
}

module.exports = Player;
