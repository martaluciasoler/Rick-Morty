import React from 'react';
import '../stylesheets/CharacterCard.scss';

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="CharacterCard">
        <img
          className="CharacterCard__image"
          alt={this.props.data.name}
          src={this.props.data.image}
        />
        <p className="CharacterCard__name">{this.props.data.name}</p>
        <p className="CharacterCard__specie">{this.props.data.species}</p>
      </div>
    );
  }
}

export default CharacterCard;
