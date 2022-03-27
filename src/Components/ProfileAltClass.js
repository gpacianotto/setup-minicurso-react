import React from "react"

export default class ProfileAltClass extends React.Component{

    constructor()
    {
        super();
        this.state = {mostra: false, nome: ""}
    }
    handleClick()
    {
        this.setState({mostra: true})
    }

    componentDidMount()
    {
        //executa 1 vez só (quando componente é carregado)
        console.log("montei")
    }

    componentDidUpdate()
    {
        //executa toda vez que o componente atualiza
        console.log("atualizei")
    }

    render()
    {
        return(
            <>
        <label htmlFor={"name"}>Insira seu Nome</label>

			<input id={"name"} type="text"
            onChange={(e)=> {
                this.setState({nome: e.target.value});
            }}
            />
			<button onClick={() => {this.handleClick()}}>Enter</button>
			<br/>

			{this.state.mostra &&
                <h1 id={"apresentacao"}>
                    Fala aí {this.state.nome}!
                </h1>
            }

        <h2>Hoje é dia {new Date().toLocaleString('pt-BR')}</h2>
        </>
        )
    }
}