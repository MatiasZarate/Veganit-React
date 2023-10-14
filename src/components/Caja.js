import React from 'react';
import "../css/Main.css"

function Caja (props){
    return (
		
            <div className="caja"> 
			<h1 > TOTAL {props.titulo}: </h1>
            <h2> {props.numero} </h2>
            <h2> {props.icon} </h2>
           
            </div>
		
    )
}

export default Caja