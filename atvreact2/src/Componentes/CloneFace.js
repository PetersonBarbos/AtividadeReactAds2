function CloneFace (){
    return(
        <div>
            <span className = "lateral" id ="naodestacado">
                <p>facebook</p>
                <p>O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</p>
                </span>
                <span className = "lateral">
                    <span id="destacado"> 
                        <form>
                            <p><input type = "email" autocomplete = "on" placeholder ="email ou telefone"></input></p>
                            <p><input type ="password" placeholder = "senha"></input></p>
                            <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
                                <p><input type = "button" value = "Entrar"></input></p>
                            </a>
                        </form>
                        <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
                            <p>esqueceu a senha?</p>
                        </a>
                        <hr></hr>
                        <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
                            <input type = "button" value = "Criar nova conta"></input>
                        </a>
                    </span>
                    <p><a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer"><strong>Criar uma Página para uma celebridade</strong></a>, uma marca ou uma empresa.</p>
            </span>
        </div>
    )
} export default CloneFace;