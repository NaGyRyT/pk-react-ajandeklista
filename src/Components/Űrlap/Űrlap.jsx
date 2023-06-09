import React from 'react'
import './Űrlap.css'

export default function Űrlap(props) {
    
    const [név, setNév] = React.useState('')
    const [célszemély, setCélszemély] = React.useState('');
    const [ár, setÁr] = React.useState('');
    const [fontosság, setFontosság] = React.useState(50);
    const [szerkesztés, setSzerkesztés] = React.useState(false);
    const [id, setId] = React.useState('')
    
    const szerkesztésIgaz = props.lista.find( elem => elem.szerkesztés === true )

    React.useEffect(() => {
        if (szerkesztésIgaz !== undefined) {
            setNév(szerkesztésIgaz.név)
            setÁr(szerkesztésIgaz.ár);
            setCélszemély(szerkesztésIgaz.célszemély);
            setFontosság(szerkesztésIgaz.fontosság);
            setSzerkesztés(false);
            setId(szerkesztésIgaz.id);
        } else {
            setNév('');
            setÁr('');
            setCélszemély('');
            setFontosság(50);
            setSzerkesztés(false);
            setId('');
        }
    }, [szerkesztésIgaz])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.felveszAjándék(név, célszemély, ár, fontosság, szerkesztés, id);
        setNév('');
        setÁr('');
        setCélszemély('');
        setFontosság(50);
        setSzerkesztés(false);
        setId('');
    }

    const getChangeHandler = setter => event => setter(event.target.value);
    
    const handleNévChange = getChangeHandler(setNév)
    const handleCélszemélyChange = getChangeHandler(setCélszemély)
    const handleÁrChange = getChangeHandler(setÁr)
    const handleFontosságChange = getChangeHandler(setFontosság);
    
    /*
    const handleSliderChange = (event) => setFontosság(event.target.value);
    const handleCélszemélyChange = (event) => setCélszemély(event.target.value)
    const handleNévChange = (event) => setNév(event.target.value)
    const handleÁrChange = (event) => setÁr(event.target.value)*/

  return (
    <>
        <h2>Ajándék felvétele</h2>
        <form action="#" className="ajandek-felvetele-form" method="GET" onSubmit={handleSubmit}> 
            <div className='form-row'>
                <label htmlFor="">
                    Kinek szól az ajándék?
                    <input type="text" name="ajandek-célszemély" value={célszemély} onChange={handleCélszemélyChange}/>
                </label>
                <span>id: {id}</span>
            </div>
            <div className='form-row'>
            <label htmlFor="">
                Ajándék neve
                <input type="text" name="ajandek-nev" value={név} onChange={handleNévChange}/>
            </label>
            </div>
            <div className='form-row'>
                <label htmlFor="">
                    Ajándék ára (Ft)
                    <input type="number" min="1" name="ajandek-ar" value={ár} onChange={handleÁrChange} required />
                </label>
            </div>
            <div className='form-row'>
                <label htmlFor="">
                    Ajándék fontossága (0%-100%)
                    <input type="range" 
                    min="0" 
                    max="100" 
                    step="5" 
                    name="ajandek-fontossága" 
                    required
                    value={fontosság}
                    onChange={handleFontosságChange}/>
                    <span>{fontosság} %</span>
                </label>
            </div>
            <div className='form-row'>
                <button type='submit'>{szerkesztésIgaz ? 'Mentés' : 'Felvétel'}</button>
            </div>
        </form>
    </>
  )
}