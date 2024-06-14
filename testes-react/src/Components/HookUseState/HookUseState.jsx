import {useState} from 'react';

function HookUseState (){
    const [contador, setcontador] = useState(0);
    return(
        <div>
            <h1>Pontos atribuídos: {contador}</h1>
            <button onClick={()=> setcontador(contador + 1)}>Adicionar pontos</button>
            <button onClick={()=> setcontador(contador - 1)}>Retirar pontos</button>
        </div>
    )
}

export default HookUseState;