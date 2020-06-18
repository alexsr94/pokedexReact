import React, {Component} from 'react';

class CaughtPokemon extends Component{
    state ={
        "caughtPokemon": 0
    }
   

    resetPokedex=()=>{
        this.setState({caughtPokemon:0})
    }
    catchPokemon=()=>{
       this.setState(prevState=>{return{caughtPokemon:prevState.caughtPokemon+1}})
    }
    render(){
        return(<><p>Caught {this.state.caughtPokemon} Pokemons {this.props.date}</p>
        <button onClick={this.catchPokemon}>Catch Pokemon</button>
        <button onClick={this.resetPokedex}>Reset Pokedex</button></>)
    }
}



export default CaughtPokemon;