import { Link, useLocation } from 'react-router-dom'

export default function Sucesso(props){
    const {state} = useLocation()
    console.log(props,state)
    return(
        <section className="Sucesso">
            <div className="mensagem">
                <h2>Pedido feito<br/> com sucesso!</h2>
            </div>
            <div className="infoPedido">
                <h3>Filme e sessão</h3>
                <p>{state.titulo}</p>
                <p>{state.data} {state.horario}</p>
            </div>
            <div className="infoPedido">
                <h3>Ingressos</h3>
                {state.numeros.map(numero=><p key={numero}>Assento {numero}</p>)}
            </div>
            <div className="infoPedido">
                <h3>Comprador</h3>
                <p>{'Nome: '+state.nome}</p>
                <p>{'CPF: ' +state.cpf}</p>
            </div>
            
            
            <div className="retorno">
                <Link to="/">
                    <button>Voltar pra Home</button>
                </Link>
            </div>
            
        </section>
    )
}