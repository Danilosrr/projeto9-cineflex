import Horario from "./Horario"

export default function Horarios(){
    return(
        <>
            <div className="mensagem">
                <h2>Selecione o horário</h2>
            </div>
            <section className="Horarios">
                <Horario dia="quinta-feira" data="24/06"/>
                <Horario dia="sexta-feira" data="25/06"/>
            </section>
            <footer className="rodape">
                <img src="./imgs/image9.png" alt="filme selecionado"/>
                <div className="infoFilme">
                    <h4>Nome do filme</h4>
                    <h4>Horario do filme</h4>
                </div>
            </footer>
        </>
        
    )
}