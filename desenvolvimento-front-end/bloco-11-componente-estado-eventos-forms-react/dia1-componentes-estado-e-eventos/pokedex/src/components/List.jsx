import { Component } from "react";
import pokemons from "../data";
import Card from "./Card";

class List extends Component {
    constructor () {
        super()
        this.clicar = this.clicar.bind(this);
        this.state = {
            valorClique: 25
        }
    }
    
    clicar () {
        this.setState((anteriorClique, _props) => ({
            valorClique: anteriorClique.valorClique + 1
        }))
    }

    render() {
        return <>
          <div className="cardDad"> 
          {pokemons.find((poke) => poke.id === this.state.valorClique ? <Card key={poke.id} pokeInfo={poke}/> : 'false')}
          </div>
          {/* <button onClick={this.clicar}>Anterior</button> */}
          <button onClick={this.clicar}>Proximo</button>
        </>
            // <div className="cardDad">
            //     {pokemons.map((poke) => <Card key={poke.id} pokeInfo={poke}/>)}
            // </div>
    }
}

export default List;