import { Link } from "react-router-dom";

export default function Horario(props){
    return(
        <div className="horario">
            <h1>{props.dia+" - "+props.data}</h1>
            <div className="sessoes">
                <Link to="/sessao">
                    <button>15:00</button>
                </Link>
                <Link to="/sessao">
                <button>19:00</button>
                </Link>
            </div>
        </div>
    )
}