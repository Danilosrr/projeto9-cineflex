import { dadosFilmes } from "../../dados/dadosFilmes"
import Filme from "./Filme"

export default function Filmes(){
    return(
        <>
            <div className="mensagem">
                <h2>Selecione o filme</h2>
            </div>
            <section className="Filmes">
                {dadosFilmes.map((filme,index)=><Filme titulo={filme.title} key={index}/>)}
            </section>
        </>
    )
}