import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/CharacterList.scss';

class CharacterList extends React.Component {
  render() {
    const innerHTML = this.props.Characters.map((characterData, index) => (
      <CharacterCard key={index} data={characterData} />
    ));
    return (
      <ul className="dataList">
        <li key={this.props.id} className="listItem">
          {innerHTML}
        </li>
      </ul>
    );
  }
}

export default CharacterList;
