import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Header from './Header';
import Filters from './Filters';
import fetchData from '../services/FechData';
import CharacterDetail from './CharacterDetails';
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';
import adalab from '../images/adalab.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Characters: [],
      filterText: '',
      filterSelect: '',
    };
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleResetText = this.handleResetText.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }
  componentDidMount() {
    fetchData().then((data) => {
      this.Characters = data.results;
      this.setState({ Characters: data.results });
    });
  }
  //metodo para pintar detalles
  renderCharacterDetails(props) {
    console.log(props);
    const routeId = props.match.params.characterId;
    const matchCharacters = this.state.Characters.find(
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
      return <p>¡CATASTROFE! personaje no encontrado</p>;
    }
  }

  handleFilterText(text) {
    console.log('handleFilterText');
    this.setState({
      filterText: text,
    });
  }
  handleFilterSelect(sel) {
    this.setState({
      filterSelect: sel,
    });
  }
  handleResetText() {
    console.log('handleResetText');
    this.setState({
      filterText: '',
    });
  }

  render() {
    console.log(this.state.Characters);
    const filterCharacter = this.state.Character.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(this.state.filterText.toLowerCase());
      // }).filter((character) => {
      //   return character.species === this.state.filterSelect;
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
              handleFilterSelect={this.handleFilterSelect}
              filterSelect={this.state.filterSelect}
            />
            <CharacterList Characters={filterCharacter} />
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
