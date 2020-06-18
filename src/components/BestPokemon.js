import React, {Component} from "react";
class BestPokemon extends Component{
  state ={
    pokemonNames: [],
    isLoading: true
  }
  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
    .then((res)=>{res.json().then((data)=>{
      console.log(res)
      if (!res.ok) {
        this.setState({
          pokemonNames: [],
          isLoading: false,
          err: "error",
        });
      } else {
        this.setState({
          pokemonNames: [
            data.pokemon_entries[0].pokemon_species.name,
            data.pokemon_entries[3].pokemon_species.name,
            data.pokemon_entries[6].pokemon_species.name,
          ],
          isLoading: false,
        });
      }

    }) })
    
    
  }
  render(){
    if (this.state.isLoading){
      return (
        <span>LOADING...</span>
      )
    } if (!this.state.isLoading){
      return (
        <div>
          <p>My Bests Pokemons are: {this.state.pokemonNames.join(", ")}</p>
          <ul>
            {this.props.abilities.map((x, index) => {
              return <li key={index}>{x}</li>;
            })}
          </ul>
        </div>
      )
            
    }
    if (!this.state.isLoading && this.state.err) {
      return (<span>Something went wrong.</span>);
    }
        
  }
}


export default BestPokemon;
