import React, { Component } from 'react';
import "../css/Main.css"

class ApiUno extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gif: ""
    }
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.traerGifNuevo();
  }

  traerGifNuevo() {
    
    this.apiCall(/*"https://veganit-omlm.onrender.com/users/api"*//*"https://pokeapi.co/api/v2/pokemon/ditto"*/"https://veganit-omlm.onrender.com/users/api", this.mostrarGif);
   
    /*console.log(mostrarGif)*/
  }
  mostrarGif = data => {
    this.setState({
      gif: data.total
    });
  }


  render() {
    let contenido;
    if (this.state.gif === "") {
      contenido = <p>cargando... </p>;
    } else {
      contenido = <p> {this.state.gif} </p>;
    }

    return (
      <div>
        {contenido}
        <button onClick={() => this.traerGifNuevo()/*console.log(this.state.gif)*/}>Actualizar</button>
      </div>
    );
  }
}

export default ApiUno;
