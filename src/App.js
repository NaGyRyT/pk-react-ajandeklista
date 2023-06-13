import './App.css';
import React, { useState } from 'react';
import Lista from './Components/Lista/Lista';
import Szűrő from './Components/Szűrő/Szűrő';
import Űrlap from './Components/Űrlap/Űrlap';


function App() {
  const [state, setState] = useState({
    ajándékLista: [{
      név: 'Spenót',
      célszemély: 'Popeye',
      ár: '179',
      fontosság: '20',
      kihúzva: false,
      szerkesztés: false,
      id: 1
  },
  {
      név: 'React book for dummies',
      célszemély: 'Attila',
      ár: '8000',
      fontosság: '85',
      kihúzva: false,
      szerkesztés: false,
      id: 2
  },
  {
      név: 'Reszkessetek Betörők 2 DVD',
      célszemély: 'Steven Spielberg',
      ár: '2990',
      fontosság: '90',
      kihúzva: false,
      szerkesztés: false,
      id: 3
  }

    ],
    nextId: 4
  });

  const [elrejtKihúzott, setElrejtKihúzott] = useState(false);

  function toggleElrejtKihúzott(újÉrték){
    setElrejtKihúzott(újÉrték)
  }

  function felveszAjándék(név, célszemély, ár, fontosság, szerkesztés, id){ 
    if (id === "") {
      setState({
        ajándékLista: [
          ...state.ajándékLista,
          {
            név,
            célszemély,
            ár,
            fontosság,
            kihúzva: false,
            szerkesztés: false,
            id: state.nextId
          }
        ],
        nextId: state.nextId + 1  
      })
    } else {
      const ajándékLista = 
      state.ajándékLista.filter(ajándék => ajándék.id !==id)
      setState({
        ajándékLista: [
          ...ajándékLista,
          {
            név,
            célszemély,
            ár,
            fontosság,
            kihúzva: false,
            szerkesztés: false,
            id
          }
        ],
        nextId: state.nextId 
      })

    }

    };

  function findIndexById(list, id){
    for (let i = 0; i < list.length; i++){
      if (String(list[i].id) === String(id)){
        return i;
      }
     
    }
    return null;
  }

  function mozgat(id, irány){
    const ajándékLista = [...state.ajándékLista]
    const currentIndex = findIndexById(ajándékLista, id);
    const határ = irány === -1 ? 0 : ajándékLista.length -1
    if (currentIndex === null || currentIndex === határ){
      return;
    }
    const otherIndex  = currentIndex + irány;
    const swap = ajándékLista[otherIndex];
    ajándékLista[otherIndex] = ajándékLista[currentIndex];
    ajándékLista[currentIndex] = swap;
    setState({
      ajándékLista,
      nextId: state.nextId
    })
  }

  function törölAjándék(id) {
    const ajándékLista = 
      state.ajándékLista.filter(ajándék => String(ajándék.id) !==id)
    setState({
      ajándékLista,
      nextId: state.nextId
    })
    }

  function toggleKihúzAjándék(id) {
    const ajándékLista = state.ajándékLista.map(ajándék => {
      if (String(ajándék.id) === id) {
        ajándék.kihúzva = !ajándék.kihúzva;
      }
      return ajándék
    })
    setState({
      ajándékLista,
      nextId: state.nextId
    })
  }

  function szerkesztAjándék(id) {
    const ajándékLista = state.ajándékLista.map(ajándék => {
      if (String(ajándék.id) === id) {
        ajándék.szerkesztés = !ajándék.szerkesztés;
      } else ajándék.szerkesztés = false
      return ajándék
    })
    setState({
      ajándékLista,
      nextId: state.nextId
    }
  )
  }

  return (
    <div className="App">
      <h1>Ajándéklista</h1>
      <Űrlap 
      felveszAjándék={felveszAjándék}
      lista = {state.ajándékLista}
      />  
      <Lista
        lista={state.ajándékLista} 
        mozgat={mozgat}
        szerkesztAjándék={szerkesztAjándék}
        törölAjándék={törölAjándék}
        toggleKihúzAjándék={toggleKihúzAjándék}
        elrejtKihúzott={elrejtKihúzott}
        />
      <Szűrő toggleElrejtKihúzott={toggleElrejtKihúzott}/>
      </div>
    
  );
}

export default App;