import pokemonLogo from '../src/img/pokemon.png'

import pokeApiLogo from '../src/img/pokeapi.png'

import MyApi from './components/miApi'


function App() {
  
        

    return (
    
      //navbar
      <div className="App">
        <header className="header">
          <img src={pokemonLogo} />
        </header>


        {/* titulo e imagen*/}
        <article className='main'>
          <h1>Consumo de apis react</h1>
        </article>



        {/* pokeapi logo y segundo header*/}
        <article className='pokeapi'>
          <img src={pokeApiLogo} />
          <h2>Nombre de pokemones</h2>
        </article>

        <hr />

       {/* componente de mi api*/}
        <div className='pokemones'>

        <MyApi />  
     
        </div>
      </div>
    );
  }

export default App;
