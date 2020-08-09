import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Header from './Header';
import Filters from './Filters';
import fetchData from '../services/FechData';
import CharacterDetail from './CharacterDetails';
import '../stylesheets/App.scss';
import adalab from '../images/adalab.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filterText: '',
    };
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleResetText = this.handleResetText.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
  }
  componentDidMount() {
    fetchData().then((data) => {
      this.characters = data.results;
      this.setState({ characters: data.results });
    });
  }
  //metodo para pintar detalles
  renderCharacterDetails(props) {
    const routeId = props.match.params.characterId;
    const matchCharacters = this.state.characters.find(
      (character) => character.id === parseInt(routeId)
    );

    if (matchCharacters) {
      return (
        <CharacterDetail
          name={matchCharacters.name}
          image={matchCharacters.image}
          species={matchCharacters.species}
          origin={matchCharacters.origin}
          episode={matchCharacters.episode}
          status={matchCharacters.status}
        />
      );
    } else {
      return <p className="catastrofe">¡CATÁSTROFE! personaje no encontrado</p>;
    }
  }

  handleFilterText(text) {
    this.setState({
      filterText: text,
    });
  }

  handleResetText() {
    this.setState({
      filterText: '',
    });
  }

  render() {
    const filterCharacter = this.state.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.state.filterText.toLowerCase());
    });

    return (
      <div className="App">
        <Header />
        <main className="main">
          <Route exact path="/">
            <Filters
              handleFilterText={this.handleFilterText}
              filterText={this.state.filterText}
              handleResetText={this.handleResetText}
              resetText={this.state.resetText}
            />
            <CharacterList characters={filterCharacter} />
          </Route>
          <Switch>
            <Route
              path="/character/:characterId"
              render={this.renderCharacterDetails}
            />
          </Switch>
        </main>
        <footer className="footer">
          <div className="footer__logo">
            <img className="adalab" src={adalab} alt="Rick and Morty" />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
