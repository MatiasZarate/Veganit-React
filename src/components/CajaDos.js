import React from 'react';
import "../css/Main.css"

function CajaDos (props){
    return (
		
            <div className="caja"> 
			<h1 > ULTIMO  {props.titulo} CREADO : </h1>
            <h2> {props.numero} </h2>
            <h2> {props.icon} </h2>
            </div>
		
    )
}

export default CajaDos