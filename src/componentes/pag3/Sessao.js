export default function Sessao(){
    return(
        <>
            <section className="Sessao">

                <div className="mensagem">
                    <h2>Selecione o(s) assento(s)</h2>
                </div>
                <div className="assentos">
                    <img src="./imgs/imgTemporaria.png" alt="temporario"/>
                </div>

                <section className="dadosCompra">
                    <label>Nome do comprador:</label><br/>
                    <input type="text" id="comprador" placeholder="Digite seu nome..."/><br/>
                    <label>CPF do comprador:</label><br/>
                    <input type="text" id="cpf" placeholder="Digite seu CPF..."/><br/>
                    <input type="submit" id="confirmar"/>
                </section>
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