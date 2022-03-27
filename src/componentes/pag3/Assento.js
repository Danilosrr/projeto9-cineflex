import { useState } from "react"

export default function Assento(props){

    const[selecionar,setSelecionar] = useState("")
    return(
        <div className={props.disponivel?"Assento "+selecionar :"Assento indisponivel"} onClick={
            props.disponivel?()=>{
                props.funcao([...props.assentoSelecionado,props.id]);
                props.funcaoNum([...props.numeroAssento,props.numero]);
                setSelecionar("selecionado")
                }:()=>alert("assento indisponivel")}>
            <h5>{props.numero}</h5>
        </div>
    )


}