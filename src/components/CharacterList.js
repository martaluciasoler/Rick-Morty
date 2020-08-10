import React from 'react';
import CharacterCard from './CharacterCard';
import gif from '../images/gif.webp';
import '../stylesheets/CharacterList.scss';

class CharacterList extends React.Component {
  render() {
    const innerHTML = this.props.characters.map((characterData, index) => (
      <CharacterCard key={index} data={characterData} />
    ));
    if (this.props.characters.length === 0) {
      return (
        <div className="container">
          <span className="container__span">¡CATÁSTROFE!</span>
          <img className="container__gif" src={gif} alt="Rick and Morty" />
          <h3 className="container__error">
            No hay ningún personaje que coincida con esta palabra.
          </h3>
        </div>
      );
    } else {
      return (
        <ul className="dataList">
          <li key={this.props.id} className="listItem">
            {innerHTML}
          </li>
        </ul>
      );
    }
  }
}

export default CharacterList;
