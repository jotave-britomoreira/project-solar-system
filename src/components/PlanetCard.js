import { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altPlanet = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{ planetName }</h3>
        <img src={ planetImage } alt={ altPlanet } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
