import React from 'react'
import './Lista.css'

export default function Lista(props) {
    const toggleKihúz = (e) => {
        props.toggleKihúzAjándék(e.target.dataset.id);
    }

    const töröl = (e) => {
        props.törölAjándék(e.target.dataset.id);
    }

    const fel = (e) => {
      props.mozgat(e.target.dataset.id, -1);
    }

    const le = (e) => {
      props.mozgat(e.target.dataset.id, 1);
    }

    const jsxLista = props
        .lista
        .filter(elem => !props.elrejtKihúzott || elem.kihúzva === false)
        .map(elem => (
        <li key={elem.id} className={elem.kihúzva ? "kihúzva" : ""}>
            {elem.célszemély}: {elem.név} ({elem.ár}) {elem.fontosság}
            <button onClick={toggleKihúz} data-id={elem.id}>
              {elem.kihúzva ? "Visszaállít" : "Kihúzás"}
            </button>
            <button onClick={töröl} data-id={elem.id}>Törlés</button>
            <button onClick={fel} data-id={elem.id}>Fel</button>
            <button onClick={le} data-id={elem.id}>Le</button>
        </li>
    ))
  return (
    <>
    <h2>Ajándéklista</h2>
    <ul className='ajandeklista-container'>
        {jsxLista}
    </ul>

    </>
  )
}
