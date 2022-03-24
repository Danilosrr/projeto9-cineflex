import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';

import Horario from "./Horario"
import Rodape from "../rodape/Rodape";

export default function Horarios(){
    const[filmeSelecionado,setfilmeSelecionado] = useState(null);
    const {filmeId} = useParams();
    

    useEffect(()=>{
        const obterHorarios=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)
        obterHorarios.then(resposta=>{
        setfilmeSelecionado(resposta.data);
        })
    },[filmeId])
    
    if(filmeSelecionado==null){
        return(
            <></>
        )
    }else{
        const {days:dias,title:titulo,posterURL:src} = filmeSelecionado
        console.log(dias)
        return(
            <>
                <div className="mensagem">
                    <h2>Selecione o horário</h2>
                </div>
                <section className="Horarios">
                    {dias.map(sessao=><Horario dia={sessao.weekday} data={sessao.date} key={sessao.id} sessoes={sessao.showtimes}/>)}
                    
                </section>
                <Rodape titulo={titulo} horario="" dia="" src={src}/>
            </>
        )
    }  
}