import {expect} from 'chai';
import Horse from '../target/animals/Horse';

describe('the Horse', () => {
  it('should say hiii', () => {
    let horse = new Horse();
    expect(horse.renderCry()).to.equal('hii hii!');
  });

  it('should be like an horse', () => {
    expect(Horse.getIcon()).to.equal('🐴');
  });
});