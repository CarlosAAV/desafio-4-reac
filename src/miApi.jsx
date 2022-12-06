const miApi = ()=>{

useEffect(() => {
    consultarInformacion()
  }, []);

  const consultarInformacion = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data.results);}}

    export default miApi;