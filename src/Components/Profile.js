import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Profile(props)
{
    const id = props.id;

    function handleClick()
    {
        let idH1 = "#apresentacao-" + id;
        let idInput = "#name-"+ id;

        let value = document.querySelector(idInput).value;
        let h1 = document.querySelector(idH1);

        console.log("h1: ", h1);
        console.log("value: ", value);
        
        h1.innerHTML = "Fala aí " + value + "!";			
    }
    return (
        <>
        <label htmlFor={"name-"+id}>Insira seu Nome</label>
			<input id={"name-"+id} type="text"></input>
			<button onClick={() => {handleClick()}}>Enter</button>
			{/* <Button color="danger">Danger!</Button> */}
			<br/>
			<h1 id={"apresentacao-" + id}></h1>
        <h2>Hoje é dia {new Date().toLocaleString('pt-BR')}</h2>
        </>
    )
}