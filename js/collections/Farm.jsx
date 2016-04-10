import React from 'react';
import Horse from '../animals/Horse';
import Dog from '../animals/Dog';

class Farm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAnimal(animal, key) {
    switch (animal) {
      case 'horse':
        return <Horse key={key} />;
      case 'dog':
        return <Dog key={key} />;
      default:
        return null;
    }
  }

  renderAddedAnimals() {
    return this.props.animals.map((animal, i) => {
      return <li>{this.renderAnimal(animal, i)}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Your pycon farm!</h4>
        {this.renderAddedAnimals()}
      </div>
    );
  }
}

export default Farm;