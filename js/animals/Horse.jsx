import BaseAnimal from './BaseAnimal';

class Horse extends BaseAnimal {
  static getIcon() {
    return '🐴';
  }

  renderIcon() {
    return Horse.getIcon();
  }

  renderCry() {
    return 'hii hii!'
  }
}

export default Horse;