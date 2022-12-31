import { useState, useEffect} from "react";

function Countdown() {
    //objetivo de segundos y segundos que p¿han pasado 
    let [targetSeconds, setTargetSeconds] = useState(null);
    let [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(function(){
        if (targetSeconds === null) return;

        // targetSeconds tiene un valor
        setElapsedSeconds(0);

        let interval = setInterval(function () {
            setElapsedSeconds((elapsedSeconds)=> elapsedSeconds + 1)
        }, 1000);

        return ()=>{
            clearInterval(interval);
        }

    },[targetSeconds]);

    function parseForm(ev) {
        ev.preventDefault();
        let seconds = ev.target.seconds.value;        
        setTargetSeconds(parseInt(seconds));//aquí pues vemos en terminal y parseamos para que se convierta en entero 
    }

    //setInterval(function(){},1000);esto no es una función pura
    
    if(elapsedSeconds >= targetSeconds && targetSeconds !== null){
        return (
            <>
            <p>Terminó el conteo prro</p>
            <button onClick={()=> setTargetSeconds(null) }>Reiniciar</button>
            </>
        );
    }

    if (targetSeconds !== null){
        return(
            <p>Faltan {targetSeconds-elapsedSeconds} segundos</p>
        );
    }



    return(
        <div>
        <p>¿cuántos segundos quieres contar?</p>
        <form action="#" onSubmit={ev=>parseForm(ev)}>
            <input type="number" name="seconds" />
            <button>Iniciar</button>
        </form>
        </div>
    );
}

export default Countdown;