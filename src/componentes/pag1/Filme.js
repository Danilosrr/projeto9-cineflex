import { Link } from "react-router-dom";

export default function Filme(props){
    return(
        <article className="Filme">
            <Link to={`/filme/${props.id}`}>
                <img src={props.img} alt="poster do filme"/>
            </Link>
        </article>
    )
}
