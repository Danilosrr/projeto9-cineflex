export default function Rodape(props){
    return(
         <footer className="rodape">
            <img src={props.src} alt="filme selecionado"/>

            <div className="infoFilme">
                <h4>{props.titulo}</h4>
                <h4>{props.dia.length>0&&props.horario.length>0?props.dia+" - "+props.horario:""}</h4>
            </div>
        </footer>
    )
   
}
