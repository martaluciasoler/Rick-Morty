import React from 'react';
import '../stylesheets/Filters.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.props.handleFilterText(event.target.value);
  }
  handleReset(ev) {
    this.props.handleResetText(ev.currentTarget);
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
        </div>
      </form>
    );
  }
}

export default Filters;
