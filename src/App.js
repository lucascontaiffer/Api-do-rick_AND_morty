import "./App.css";
import { useEffect, useState } from "react";
import { getCharacters, searchCharacter } from "./apis";
import ShowCharacters from "./components/ShowCharacters";
import LogoHeader from "./components/LogoHeader";

function App() {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);


  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const [notFound, setNotFound] = useState(false)

  // const [page, setPage ] = useState()

  let itensPerPage = 20
  const fetchApisResultsOfCharacters = async () => {
    try {
      //faz o loading
      setLoading(true);
      //

      // pega os characters e joga em uma váriavel do app
      const data = await getCharacters(page);

      // Como irá aparecer na tela ele joga no use state([]): Array para renderizar
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.info.count / itensPerPage))
      
      // Para o loading
      setLoading(false);
           
    } catch (error) {
      console.log("fetchApisResultsOfCharacters", error);
    }
  };

  // isso indica que irá renderizar na tela
  useEffect(() => {
    console.log("carregou");
    fetchApisResultsOfCharacters();
  }, [page]);

  const onSearchHandler = async (character, index) =>{
    if(!character){
      return  fetchApisResultsOfCharacters()
    }

    setLoading(true)
    setNotFound(false)

    const result = await searchCharacter(character)
    console.log('onSearchHandler: ', result)
    if(!result.results){
      setNotFound(true)
    }else{
      setCharacters(result.results)
      console.log('ola',result.results.length)
      setPage(1)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <div>
      <LogoHeader onSearch={onSearchHandler}/>
      {notFound ? (<div>não encontrado</div>) :
      (<ShowCharacters
        characters={characters}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />)}
    </div>
  );
}

export default App;
