import './App.css';
import React, { useCallback, useState } from 'react';
import Lista from './Components/Lista/Lista';
import Szűrő from './Components/Szűrő/Szűrő';
import Űrlap from './Components/Űrlap/Űrlap';


function App() {
  const [ajándékLista, setAjándékLista] = React.useState([
    {
        név: 'Joghurt',
        célszemély: 'Popeye',
        ár: 179,
        fontosság: 85,
        id: 1
    },
    {
        név: 'React book for dummies',
        célszemély: 'Attila',
        ár: '8000',
        fontosság: '85',
        id: 2
    },
    {
        név: 'Reszkessetek Betörők 2 DVD',
        célszemély: 'Steven Spielberg',
        ár: '2990',
        fontosság: '90',
        id: 3
    }

])
const [nextId, setNextId] = useState(4);

function felveszAjándék(név, célszemély, ár, fontosság){
  setAjándékLista(
      [...ajándékLista, {név, célszemély, ár, fontosság, id: nextId }]
  )
  setNextId(nextId+1)
};

  return (
    <div className="App">
      <h1>Ajándéklista</h1>
      <Űrlap felveszAjándék={felveszAjándék}/>  
      <Lista lista={ajándékLista}/>
      <Szűrő/>
      </div>
    
  );
}

export default App;
