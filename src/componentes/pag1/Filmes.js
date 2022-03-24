import axios from "axios"
import { useState, useEffect  } from "react"
import Filme from "./Filme"

export default function Filmes(){
    const[posters,setposters] = useState([])
    useEffect(()=>{
        const obterFilmes = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        obterFilmes.then(resposta=>{
        setposters(resposta.data);
        console.log(resposta)
    })
    },[])
    
    return(
        <>
            <div className="mensagem">
                <h2>Selecione o filme</h2>
            </div>
            <section className="Filmes">
                {posters.map((filme)=><Filme img={filme.posterURL} id={filme.id} key={filme.title}/>)}
            </section>
        </>
    )
}