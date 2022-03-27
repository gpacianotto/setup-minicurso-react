import { Button } from 'reactstrap';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function ProfileAlt(props)
{
    const [nome, setNome] = useState("");
    const [mostra, setMostra] = useState(false);

    const date = new Date();

    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
          });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    function handleClick()
    {
        setMostra(true);		
    }
    return (
        <>
        <label htmlFor={"name"}>Insira seu Nome</label>

			<input id={"name"} type="text"
            onChange={(e)=> {
                setNome(e.target.value);
            }}
            />
			<button onClick={() => {handleClick()}}>Enter</button>
			<br/>

			{mostra &&
                <h1 id={"apresentacao"}>
                    Fala aí {nome}!
                </h1>
            }

        {/* <h2>Hoje é dia {new Date().toLocaleString('pt-BR')}</h2> */}

            <h2>
                Agora são: {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
            </h2>
        </>
    )
}