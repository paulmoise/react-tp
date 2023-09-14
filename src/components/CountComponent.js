// Sans utilisation de la librairie prop-types
import './style.css'
import React, { useState } from 'react'


export default function CountComponent({initialValue = 0}){

    // utiliser la valeur du props comme valeur par initial d'un state n'est pas une bonne pratique. 
    //Il faut plutot utiliser un autre hook, le hook useEffect

    // creation du state
    const [counter, setCounter] = useState(initialValue)

    // la fonction permettant de géner l'incrémentation
    const handleIncrement = () => {
        setCounter( _ => counter + 1 )
    }

    // la fonction permettant de gérer la décrémentation
    const handleDecrement = () => {
        setCounter( _ => counter - 1 )
    }

    // la fonction permettant de reset la valeur du state.
    const handleReset = () => {
        setCounter(initialValue)
    } 

   

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div>
                <div>
                    <h1>Build simple counter</h1>
                    <h3>{counter}</h3>
                </div>
                <div style={{marginTop: "50px"} } >
                    <button className='mybutton' onClick={handleIncrement}>Increment</button>
                    <button className='mybutton' onClick={handleDecrement}>Decrement</button>
                    <button className='mybutton' onClick={handleReset}>Reset</button>
                </div>
                
            </div>
        </div>
    )
}
