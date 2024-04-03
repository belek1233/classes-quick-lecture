class Player {
  constructor({ playlist, currentTrackIndexs } = {}) {
    this.playlist = playlist;
    this.currentTrackIndex = currentTrackIndexs;
  }

  numberOfTracks() {
    return (this.playlist).length;
  }

  play(str) {
    if (this.playlist.find(({ title }) => title === str)) {
      this.currentTrackIndex = this.playlist.findIndex(({ title }) => title === str);
      return true;
    } return false;
  }

  sortByLength() {
    const asd = [...(this.playlist)].sort((a, b) => a.duration - b.duration);
    this.playlist = asd;
  }
  //   player.sortByLength();
  // expect(player.playlist).toEqual([wall, rumble, otherside, californication, stairway]);

  get tracksLeft() {
    return ((this.playlist).length - 1) - this.currentTrackIndex;
  }

  get totalDuration() {
    return this.playlist.reduce((acc, el) => acc + el.duration, 0);
  }
}

module.exports = Player;
