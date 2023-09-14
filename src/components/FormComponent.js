// Sans utilisation de la librairie prop-types

import React from 'react'


class FormComponent extends React.Component {

    constructor(){
        super();

        let name = ""
    }

    handleButtonClick(event) {
        event.preventDefault();
        console.log("Hello Reack, I am Oumaima")
    }

    render(){
        
        // on déstructure le props qui est un objet javascript et on récupère les attributs notamment buttonTitle
        const {buttonTitle} = this.props;


        return (
            <div>
                <form noValidate autoComplete="off">
                    <label htmlFor="name">Name:</label>
                    <input id="name" onChange={(event)=>{
                        this.name = event.target.value
                        console.log("Name value is = ", this.name)
                        }
                    } />
                    <button onClick={this.handleButtonClick}>{buttonTitle}</button>
                </form>
                <div>VALUE from Input Name : {this.name ? this.name : 'empty'}</div>
            </div>
        )
    }
}

export default FormComponent;