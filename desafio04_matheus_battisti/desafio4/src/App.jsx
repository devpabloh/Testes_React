
import './App.css';
import ChallengeCSS from './Components/ChallengeCSS/ChallengeCSS';

function App() {
  const MyCars = [
    {key:1, marca:"Fiat", modelo:"Uno", cor:"Azul", carNew:true},
    {key:2, marca:"Volkswagem", modelo:"Gol", cor:"Prata", carNew:false},
    {key:3, marca:"Nissan", modelo:"kicks", cor:"Laranja", carNew:false},
    {key:4, marca:"Toyota", modelo:"4x4", cor:"Preto", carNew:true}   
  ]
  return (
    <div className="App">
      <h1>Carros em estoque</h1>
      {MyCars.map((car) => {
        return <ChallengeCSS car={car}/>;
      })}
    </div>
  );
}

export default App;
