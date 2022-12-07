import { useState, useEffect } from "react";

const MyApi = () => {

  //consumo de api
  const [info, setInfo] = useState([]);


  useEffect(() => {
    consultarInformacion()
  }, []);

  const consultarInformacion = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data.results)
  }

  //filter
  const filtrar = async (val) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon`
      const response = await fetch(url)
      const data = await response.json()
      const pokemon = val.target.value
      const resultado = data.results.filter((val) => {
        return val.name.includes(pokemon) || val.url.includes(pokemon)
      })
      setInfo(resultado)
    } catch (error) {
      console.log(error)
    }

  }

  //ordenado por nombre
  info.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });




  console.log(info);

  return (<div>
    <div className='search'>
      <i class="fa fa-search" aria-hidden="true"></i>
      <input placeholder='Buscar' onChange={filtrar} />
    </div>
    
      {info.map((val) => {
        return (
          <p className='pokeBox' key={val.name}>{val.name}</p>
        )
      })}
    
  </div>)
}

export default MyApi;