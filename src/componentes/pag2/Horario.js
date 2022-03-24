import { Link } from "react-router-dom";

export default function Horario(props){
    return(
        <div className="horario">
            <h1>{props.dia + " - " + props.data}</h1>
            <div className="sessoes">
                <Link to={`/sessao/${props.sessoes[0].id}`}>
                    <button>{props.sessoes[0].name}</button>
                </Link>
                <Link to={`/sessao/${props.sessoes[1].id}`}>
                <button>{props.sessoes[1].name}</button>
                </Link>
            </div>
        </div>
    )
}