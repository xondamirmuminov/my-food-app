import React, { Component } from 'react'

export default class index extends Component {
  state = {
    query: '',
    vegen: false,
    gluten: false,
  }

  // searchRef = React.createRef();

  handleChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  }

  handleCheckbox = e => {
    const { checked, name } = e.target;
    this.setState({ [name]: checked });
    this.searchRef.disabled = checked;
  }

  render() {
    const { query, vegen, gluten } = this.state;
    console.log(this.searchRef)
    return (
      <div>
        <input
          type="text"
          name="query"
          value={query}
          onChange={this.handleChange}
          ref={ref => this.searchRef = ref}
        />
        <input
          type="checkbox"
          name="vegen"
          checked={vegen}
          onChange={this.handleCheckbox}
        />
        Vegen
        <input
          type="checkbox"
          name="gluten"
          checked={gluten}
          onChange={this.handleCheckbox}
        />
        Gluten free
        <p>{query ? `You are searching: ${query}` : ''}</p>
      </div>
    )
  }
}
