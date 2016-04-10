import BaseAnimal from './BaseAnimal';

class Dog extends BaseAnimal {
  static getIcon() {
    return '🐶';
  }

  renderIcon() {
    return Dog.getIcon();
  }

  renderCry() {
    return 'bau bau!'
  }
}
export default Dog;