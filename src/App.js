import pokemonLogo from '../src/img/pokemon.png'
import pokeApiLogo from '../src/img/pokeapi.png'
import { useState, useEffect } from 'react';
import MyApi from './miApi'


function App() {
  
        

    return (
    
      
      <div className="App">
        <header className="header">
          <img src={pokemonLogo} />
        </header>



        <article className='main'>
          <h1>Consumo de apis react</h1>

        </article>


        <article className='pokeapi'>
          <img src={pokeApiLogo} />
          <h2>Nombre de pokemones</h2>
        </article>

        <hr />

       
        <div className='pokemones'>

        <MyApi />  
     
        </div>
      </div>
    );
  }

export default App;
