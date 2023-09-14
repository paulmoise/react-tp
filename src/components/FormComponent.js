// Sans utilisation de la librairie prop-types

import React, { useState } from 'react'


export default function FormComponent({buttonTitle = "OK"}){

    // itemName est state pour sauvegarder la saisie dans le champs par l'utilisateur
    const [itemName, setItemName] = useState('')

    // itemList est un state pour sauvegarder la liste de tous les noms ajoutés
    const [itemList, setItemList] = useState([])

    function handleButtonClick(event) {
        event.preventDefault();
        console.log(itemList)
        setItemList( (prevState) => [...prevState, itemName] )
    }

    return (
        <div>
            <div>
                <form noValidate autoComplete="off">
                    <label htmlFor="name">Name:</label>
                    <input id="name" onChange={(event) => {
                        setItemName(event.target.value)
                    }} />
                    <button onClick={handleButtonClick}>{buttonTitle}</button>
                </form>
            </div>
            <div style={{listStyle: "square"}}>
                <h1> List of elements </h1>
                <ul>
                    {
                        itemList?.map((item, index) => <li key={index}  style={{ listStyleType: "none" }}>  {item}  </li> ) 
                    }
                </ul>
            </div>
        </div>
    )
}
