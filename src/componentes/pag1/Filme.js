import { Link } from "react-router-dom";

export default function Filme(props){
    return(
        <article className="Filme">
            <Link to="/filme">
                <img src="./imgs/image3.png" alt="poster do filme"/>
            </Link>
            <h1>{props.titulo}</h1>
        </article>
    )
}