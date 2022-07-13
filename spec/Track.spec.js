const Track = require('../track.js');

describe('Описание класса Track', () => {
  let stairway;
  beforeEach(() => {
    stairway = new Track({ title: 'Stairway to Heaven', duration: 483, author: 'Led Zeppelin' });
  });

  it(' Есть поле title', () => {
    expect(stairway.title).toEqual('Stairway to Heaven');
  });

  it('Есть поле duration', () => {
    expect(stairway.duration).toEqual(483);
  });

  it('Есть поле author', () => {
    expect(stairway.author).toEqual('Led Zeppelin');
  });
});
