import React,{Component} from "react";


class Logo extends Component{
  logWhenClicked(){
    console.log("you did it bro!")

  }
  render(){
    return (<div>
      <header>
        <h1>Welcome to the {this.props.appName}</h1>
        <img onClick={this.logWhenClicked}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="pokedex-image"
        ></img>
      </header>
    </div>)
  }
};




export default Logo;
