import React from 'react';
import "../css/Main.css"

function CajaTres (props){
    return (
		
            <div className="caja"> 
			<h1 > PRODUCTO MAS  {props.titulo}: </h1>
            <h2> {props.numero} </h2>
            <h2> {props.icon} </h2>
            </div>
		
    )
}

export default CajaTres