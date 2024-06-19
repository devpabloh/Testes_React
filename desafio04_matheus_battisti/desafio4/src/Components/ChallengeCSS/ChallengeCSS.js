
import React from 'react'

const ChallengeCSS = ({car})=> {
return (
    <>
    <ul>
        <li>Indentificação: {car.key}</li>
        <li>Marca: {car.marca}</li>
        <li>Modelo: {car.modelo}</li>
        <li>Cor: {car.cor}</li>
        <li>Estado do carro: {car.carNew}</li>
    </ul>
    
    </>
)
}

export default ChallengeCSS;