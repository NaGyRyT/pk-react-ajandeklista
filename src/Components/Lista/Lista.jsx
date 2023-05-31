import React from 'react'

export default function Lista(props) {

    const jsxLista = props.lista.map(elem => (
        <li key={elem.id}>
            {elem.célszemély}: {elem.név} ({elem.ár}) {elem.fontosság}%
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
