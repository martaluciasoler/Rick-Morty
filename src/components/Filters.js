import React from 'react';
import '../stylesheets/Filters.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handelSelect = this.handelSelect.bind(this);
  }

  handleChange(event) {
    this.props.handleFilterText(event.target.value);
  }
  handleReset(ev) {
    this.props.handleResetText(ev.currentTarget);
  }
  handelSelect(ev) {
    this.props.handleFilterSelect(ev.currentTarget.value);
  }
  render() {
    console.log('handleResetText');
    return (
      <form className="form" autoComplete="off">
        <div className="input">
          <label htmlFor="inputSearch"></label>
          <input
            className="input__search"
            type="text"
            onChange={this.handleChange}
            value={this.props.FilterText}
            placeholder="Encuentra tu personaje favorito"
          />
          <button
            className="removeBtn"
            type="button"
            onClick={this.handleReset}
            value={this.props.resetText}
          >
            X
          </button>
          <select onChange={this.handelSelect} value={this.props.FilterSelect}>
            <option value="Human">Humanos</option>
            <option value="Alien">Alienigenas</option>
            {/* <option value="Todos">Todos</option> */}
          </select>
        </div>
      </form>
    );
  }
}

export default Filters;
