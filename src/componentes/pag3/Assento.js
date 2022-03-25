export default function Assento(props){
    return(
        <div className={props.disponivel?"Assento":"Assento indisponivel"} onClick={props.disponivel?()=>props.funcao([...props.assentoSelecionado,props.id]):()=>alert("assento indisponivel")}>
            <h5>{props.numero}</h5>
        </div>
    )


}