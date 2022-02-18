import { Component } from "react";
import pokemons from "../data";
import Card from "./Card";

class List extends Component {
    render() {
        console.log(this.props);
        return pokemons.map((poke) => <Card pokeInfo={poke}/>)
    }
}

export default List;