const Track = require('../track.js');
const Player = require('../player.js');

describe('Описание класса Player', () => {
  let stairway;
  let californication;
  let rumble;
  let wall;
  let otherside;
  let newPlaylist;
  let player;
  beforeEach(() => {
    stairway = new Track({ title: 'Stairway to Heaven', duration: 483, author: 'Led Zeppelin' });
    wall = new Track({ title: 'The Wall', duration: 198, author: 'Pink Floyd' });
    californication = new Track({ title: 'Californication', duration: 322, author: 'Red Hot Chili Peppers' });
    rumble = new Track({ title: 'The Rumbling', duration: 221, author: 'SiM' });
    otherside = new Track({ title: 'Otherside', duration: 256, author: 'Red Hot Chili Peppers' });
    newPlaylist = [stairway, wall, californication, rumble, otherside];
    player = new Player({
      playlist: newPlaylist,
      currentTrackIndex: 0,
    });
  });

  describe('Метод класса numberOfTracks()', () => {
    it('Возвращает количество треков в плейлисте playlist', () => {
      expect(player.numberOfTracks()).toEqual(5);
    });
  });

  describe('Метод класса play()', () => {
    describe('Когда трек присутствует в плейлисте', () => {
      it('устанавливает этот трек текущим и возвращает true', () => {
        expect(player.play('Californication')).toEqual(true);
        expect(player.currentTrackIndex).toEqual(2);
      });
    });

    describe('Когда передаваемого трека нет в плейлисте', () => {
      it('возвращает false и не меняет текущий трек (свойство currentTrackIndex)', () => {
        player.play('Otherside');
        expect(player.play('Imagine')).toEqual(false);
        expect(player.currentTrackIndex).toEqual(4);
      });
    });
  });

  describe('Геттер tracksLeft', () => {
    it('Возвращает количество треков оставшихся до конца плейлиста', () => {
      player.play('The Wall');
      expect(player.tracksLeft).toEqual(3);
    });
  });

  describe('Метод sortByLength()', () => {
    it('Не мутирует передаваемый в конструкторе массив', () => {
      const oldPlaylist = [...newPlaylist];
      player.sortByLength();
      expect(oldPlaylist).toEqual(newPlaylist);
    });

    it('сортирует плейлист по возрастанию продолжительности трека', () => {
      player.sortByLength();
      expect(player.playlist).toEqual([wall, rumble, otherside, californication, stairway]);
    });
  });

  describe('Геттер totalDuration', () => {
    it('Возвращает суммарную длину всех треков', () => {
      expect(player.totalDuration).toEqual(1480);
    });
  });
});
