import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';

import Rodape from "../rodape/Rodape";
import Assento from "./Assento";


export default function Sessao(){
    const {sessaoId} = useParams();

    const[sessaoSelecionada,setsessaoSelecionada] = useState(null);
    const[assentoSelecionado,setassentoSelecionado] = useState([]);
    const[comprador,setComprador]=useState("")
    const[cpf,setCpf]=useState("")

    useEffect(()=>{
        const obterHorarios=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)
        obterHorarios.then(resposta=>{
        setsessaoSelecionada(resposta.data);
        })
    },[sessaoId])

    function EnviarPedido(event){
        event.preventDefault();
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: assentoSelecionado,
            name: comprador,
            cpf: cpf
        });
    }

    if(sessaoSelecionada==null){
        return(
            <></>
        )
    }else{
        const{day:dia, movie:filme,seats:assentos}=sessaoSelecionada
        return(
            <>
                <section className="Sessao">

                    <div className="mensagem">
                        <h2>Selecione o(s) assento(s)</h2>
                    </div>
                    <div className="assentos">
                        {assentos.map(assento=><Assento key={assento.id} numero={assento.name} id={assento.id} disponivel={assento.isAvailable} assentoSelecionado={assentoSelecionado} funcao={setassentoSelecionado}/>)}
                    </div>

                    <form className="dadosCompra" onSubmit={EnviarPedido}>
                        <label>Nome do comprador:</label><br/>
                        <input type="text" id="comprador" placeholder="Digite seu nome..." value={comprador} onChange={event=>setComprador(event.target.value)} required/><br/>
                        <label>CPF do comprador:</label><br/>
                        <input type="text" maxLength={11} id="cpf" placeholder="Digite seu CPF (apenas números)..." value={cpf} onChange={event=>setCpf(event.target.value)} required/><br/>
                        <input type="submit" id="confirmar"/>
                    </form>
                </section>

                <Rodape titulo={filme.title} horario={dia.date} dia={dia.weekday} src={filme.posterURL}/>
            </>
        )
    }    
}