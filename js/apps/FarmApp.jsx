import React from 'react';
import Farm from '../collections/Farm'
import Horse from '../animals/Horse';
import Dog from '../animals/Dog';


class FarmApp extends React.Component {
  constructor() {
    super();
    this.state = {
      addedAnimals: ['dog', 'horse']
    };
  }

  handleAddAnimal(animal) {
    this.setState({
      addedAnimals: this.state.addedAnimals.concat(animal)
    });
  }

  renderAddAnimals() {
    return (
      <div>
        <button onClick={() => this.handleAddAnimal('horse')}>{Horse.getIcon()}</button>
        <button onClick={() => this.handleAddAnimal('dog')}>{Dog.getIcon()}</button>
      </div>
    );
  }

  render() {
    return (
      <ul>
        <h4>Buy a new animal...</h4>
        {this.renderAddAnimals()}

        <hr/>

        <Farm animals={this.state.addedAnimals} />
      </ul>
    );
  }
}
export default FarmApp;