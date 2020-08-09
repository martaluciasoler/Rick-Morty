import React from 'react';
import '../stylesheets/CharacterDetails.scss';
import { Link } from 'react-router-dom';

class CharacterDetail extends React.Component {
  // En la pantalla de detalle aparecerá además de la foto,
  //  nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
  render() {
    console.log(this.props);
    return (
      <div className="card__character">
        <p className="card__character__info--name">{this.props.name}</p>
        <img
          className="card__character__img"
          alt={this.props.name}
          src={this.props.image}
        />
        <div className="card__character__info">
          <p className="card__character__info--specie">
            Especie - {this.props.species}
          </p>
          <p className="card__character__info--origin">
            Origen - {this.props.origin.name}
          </p>
          <p className="card__character__info--episode">
            Episode - {this.props.episode.length}
          </p>
          <p className="card__character__info--state">
            Estado - {this.props.status}
          </p>
        </div>
        <div className="button">
          <Link to="/">
            <button className="button__details">Volver</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
