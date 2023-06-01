import './App.css';
import React, { useState } from 'react';
import Lista from './Components/Lista/Lista';
import Szűrő from './Components/Szűrő/Szűrő';
import Űrlap from './Components/Űrlap/Űrlap';


function App() {
  const [state, setState] = useState({
    ajándékLista: [{
      név: 'Joghurt',
      célszemély: 'Popeye',
      ár: 179,
      fontosság: 85,
      kihúzva: false,
      id: 1
  },
  {
      név: 'React book for dummies',
      célszemély: 'Attila',
      ár: '8000',
      fontosság: '85',
      kihúzva: false,
      id: 2
  },
  {
      név: 'Reszkessetek Betörők 2 DVD',
      célszemély: 'Steven Spielberg',
      ár: '2990',
      fontosság: '90',
      kihúzva: false,
      id: 3
  }

    ],
    nextId: 4
  });

function felveszAjándék(név, célszemély, ár, fontosság){
  setState({
    ajándékLista: [
      ...state.ajándékLista,
      {
        név,
        célszemély,
        ár,
        fontosság,
        kihúzva: false,
        id: state.nextId }
    ],
    nextId: state.nextId + 1  
  }  
  )

};

function törölAjándék(id) {
  const ajándékLista = 
    state.ajándékLista.filter(ajándék => String(ajándék.id) !==id)
  setState({
    ajándékLista,
    nextId: state.nextId
  })
  }


function toggleKihúzAjándék(id){
  const ajándékLista = state.ajándékLista.map(ajándék => {
    if (String(ajándék.id) === id){
      ajándék.kihúzva = !ajándék.kihúzva;
    }
    return ajándék;
  })
  setState({
    ajándékLista,
    nextId: state.nextId
  })
}

  return (
    <div className="App">
      <h1>Ajándéklista</h1>
      <Űrlap felveszAjándék={felveszAjándék}/>  
      <Lista
        lista={state.ajándékLista} 
        törölAjándék={törölAjándék}
        toggleKihúzAjándék={toggleKihúzAjándék}
        />
      <Szűrő/>
      </div>
    
  );
}

export default App;
