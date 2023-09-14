// Sans utilisation de la librairie prop-types

import React from 'react'


export default function FormComponent({buttonTitle = "OK"}){

    let name;

    function handleButtonClick(event) {
        event.preventDefault();
        console.log("Hello Reack, I am Oumaima")
    }

    return (
        <div>
            <form noValidate autoComplete="off">
                <label htmlFor="name">Name:</label>
                <input id="name" onChange={(event)=>{
                    name = event.target.value
                    console.log("Name value is = ", name)
                    }
                } />
                <button onClick={handleButtonClick}>{buttonTitle}</button>
            </form>
            <div>VALUE from Input Name : {name ? name : 'empty'}</div>
        </div>
    )
}







// Avec utilisation de la librairie prop-types

/*

import React from 'react'
import PropTypes from 'prop-types'


export default function FormComponent({buttonTitle}){

    return (
        <div>
            <form noValidate autoComplete="off">
                <label htmlFor="name">Name:</label>
                <input id="name" />
                <button>OK</button>
            </form>
        </div>
    )
}


// on affecte le type du props 
FormComponent.propTypes = {
    buttonTitle: PropTypes.string
}

*/