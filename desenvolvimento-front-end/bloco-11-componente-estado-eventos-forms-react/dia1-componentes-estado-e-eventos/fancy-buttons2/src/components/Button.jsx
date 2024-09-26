import React, { Component } from "react";
import './Button.css'

class Button extends Component {
  constructor() {
    super()
    this.clicar = this.clicar.bind(this);
    this.state = {
        numeroCliques: 0
    }
  }

  clicar() {
    this.setState((estadoAnterior, _props) => ({
        numeroCliques: estadoAnterior.numeroCliques + 1
    }))
  }

  verifyPar(num) {
      return num % 2 === 0 ? 'par' : 'impar';
  }

  render() {
      return <button className={this.verifyPar(this.state.numeroCliques)} onClick={this.clicar}>{this.state.numeroCliques}</button>;
  }
}

export default Button;