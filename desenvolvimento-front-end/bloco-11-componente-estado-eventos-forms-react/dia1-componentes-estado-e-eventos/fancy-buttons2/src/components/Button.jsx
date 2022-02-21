import React, { Component } from "react";


class Button extends Component {
  constructor() {
    super()
    this.clicar = this.clicar.bind(this);
  }

  clicar() {
      console.log('teste');
  }

  render() {
      return <button onClick={this.clicar}>Clique</button>;
  }
}

export default Button;