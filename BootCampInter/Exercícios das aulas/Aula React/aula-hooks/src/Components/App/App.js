import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/Smartcounter';
import IfoodCounter from '../Ifoodcounter/Ifoodcounter';

// BRINCADEIRA DO HACK //

// // // // // //

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let valor = 'VOCÊ_FOI_HACKEADO_|_ATUALIZE_A_PÁGINA__'
function App() {
  for (let i = 0; i<15; i++) {
    for (let i = 0; i<77; i++) {
      valor += String.fromCharCode(getRandomIntInclusive(33,125));
    }
    valor += '\n'
  }
  return (
    <h1>{valor}</h1>
    );
}

// // // // // //

/* function App() {
  return (
    <>
      <h1>Ifood</h1>
      <IfoodCounter />
    </>
    );
} */

export default App;
