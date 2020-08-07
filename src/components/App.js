import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import Header from './Header';
import Filters from './Filters';
import fetchData from '../services/FechData';
import '../stylesheets/reset.scss';
import '../stylesheets/App.scss';
import CharacterDetail from './CharacterDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Characters: [], filterText: '' };
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleResetText = this.handleResetText.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
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
    const routeId = props.match.params.charaterId;
    const matchCaracters = this.state.Characters.find(
      (character) => character.id === parseInt(routeId)
    );
    if (matchCaracters) {
      return <CharacterDetail name={matchCaracters.name} />;
    } else {
      return <p>Producto no encontrado</p>;
    }
  }

  handleFilterText(text) {
    console.log('handleFilterText');
    this.setState({
      filterText: text,
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
    const filterCharacter = this.state.Characters.filter((character) => {
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
              handlerFilterText={this.handleFilterText}
              filterText={this.state.filterText}
              handleResetText={this.state.handleResetText}
              resetText={this.state.resetText}
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
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
