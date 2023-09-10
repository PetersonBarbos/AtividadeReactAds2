function CloneFace (){
    return(
        <div className = "lateral">
            <div id ="naodestacado">
                <p id = "maior">facebook</p>
                <p>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
            </div>
            <div>
                <div id="destacado">
                        <form>
                            <p><input type = "email" autocomplete = "on" placeholder ="email ou telefone" className="caixas"></input></p>
                            <p><input type ="password" placeholder = "senha" className="caixas"></input></p>
                            <p><input type = "button" value = "Entrar" id="entrar"></input></p>
                        </form>
                            <p>esqueceu a senha?</p>
                        <hr></hr>
                            <input type = "button" value = "Criar nova conta" id="verde"></input>
                </div>
                    <div id="abaixo">
                        <p><strong>Criar uma Página para uma celebridade</strong>, uma marca ou uma empresa.</p>
                    </div>
                </div>
        </div>
    )
} export default CloneFace;