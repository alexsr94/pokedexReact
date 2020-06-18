import React from "react";
import Logo from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import logo from "./logo.svg";
import BestPokemon from "./components/BestPokemon";
import "./App.css";
let abilities = ["Anticipation", "Adaptability", "Run-Away"];

const App = () => (
  <div>
    <Logo appName="Pokedex" />
    <BestPokemon abilities={abilities} />
    <CaughtPokemon date={new Date().toISOString().slice(0, 10)} />
  </div>
);

export default App;
