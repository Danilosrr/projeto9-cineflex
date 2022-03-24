import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';

import Rodape from "../rodape/Rodape";
import Assento from "./Assento";


export default function Sessao(){
    const[sessaoSelecionada,setsessaoSelecionada] = useState(null);
    const {sessaoId} = useParams();

    useEffect(()=>{
        const obterHorarios=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)
        obterHorarios.then(resposta=>{
        setsessaoSelecionada(resposta.data);
        })
    },[sessaoId])

    if(sessaoSelecionada==null){
        return(
            <></>
        )
    }else{
        const{day:dia, movie:filme,seats:assentos}=sessaoSelecionada
        console.log(sessaoSelecionada);
        return(
            <>
                <section className="Sessao">

                    <div className="mensagem">
                        <h2>Selecione o(s) assento(s)</h2>
                    </div>
                    <div className="assentos">
                        {assentos.map(assento=><Assento numero={assento.name}/>)}
                    </div>

                    <section className="dadosCompra">
                        <label>Nome do comprador:</label><br/>
                        <input type="text" id="comprador" placeholder="Digite seu nome..."/><br/>
                        <label>CPF do comprador:</label><br/>
                        <input type="text" id="cpf" placeholder="Digite seu CPF..."/><br/>
                        <input type="submit" id="confirmar"/>
                    </section>
                </section>

                <Rodape titulo={filme.title} horario={dia.date} dia={dia.weekday} src={filme.posterURL}/>
            </>
        )
    }    
}