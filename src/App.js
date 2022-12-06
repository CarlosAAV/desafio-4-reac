import pokemonLogo from '../src/img/pokemon.png'
import pokeApiLogo from '../src/img/pokeapi.png'
import { useState, useEffect } from 'react';
import MiApi from './miApi'


function App() {
  const [info, setInfo] = useState(MiApi);




    console.log(info);
        

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

        <div className='search'>
          <i class="fa fa-search" aria-hidden="true"></i>
          <input placeholder='Buscar'/>
        </div>
        <div>
        <MiApi setInfo={setInfo}/>  
          <ul>
        {   info.map((val) =>{
                        return(
                            <li>{val.name}</li>
                        )
                    })}
                    </ul>
        </div>
      </div>
    );
  }

export default App;
