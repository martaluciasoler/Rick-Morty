import React from 'react';
import '../stylesheets/CharacterDetails.scss';

class CharacterDetail extends React.Component {
  // En la pantalla de detalle aparecerá además de la foto,
  //  nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
  render() {
    console.log(this.props);
    return (
      <div className="CharacterDetail">
        {/* <img
          className="CharacterDetail__subtitle"
          alt={this.props.data.name}
          src={this.props.data.image}
        />
        <p className="CharacterDetail__subtitle">
          Nombre:{this.props.data.name}
        </p>
        <p className="CharacterDetail__subtitle">
          Especie:{this.props.data.species}
        </p>
        <p className="CharacterDetail__subtitle">
          Origen:{this.props.data.origin}
        </p>
        <p className="CharacterDetail__subtitle">
          Episode:{this.props.data.episode}
        </p>
        <p className="CharacterDetail__subtitle">
          Estado:{this.props.data.status}
        </p> */}
      </div>
    );
  }
}

export default CharacterDetail;
