import { Component } from "react";


class Card extends Component {
    render() {
        const { pokeInfo } = this.props;
        console.log(pokeInfo);
        return <div className={pokeInfo.name}>
            <h1>{pokeInfo.name}</h1>
            <img src={pokeInfo.image} alt={pokeInfo.name} />
        </div>
    }
}

export default Card;