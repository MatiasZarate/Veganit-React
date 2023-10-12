import React, { Component } from 'react';
import "../css/Main.css"

class ApiTres extends Component {
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
     const url = `https://veganit-omlm.onrender.com/users/lastcreated?timestamp=${new Date().getTime()}`;
    /*this.apiCall("https://veganit-omlm.onrender.com/users/api", this.mostrarGif);*/
    this.apiCall(url, this.mostrarGif);
   
  }

  mostrarGif = data => {
    if (data.data) {
      const ultimoUsuario = data.data;
      this.setState({
        gif: ultimoUsuario.nombre, // Cambia "nombre" al atributo que deseas mostrar
      });
    }
  }
  actualizarGif =()=>{
    this.traerGifNuevo();
    alert("actualizado a los datos más recientes")
    
    }


  render() {
    let contenido;
    if (this.state.gif === "") {
      contenido = <p>cargando... </p>;
    } else {
      contenido = <p> {this.state.gif}</p>;
    }

    return (
      <div>
        {contenido}
        <button onClick={this.actualizarGif /*() => this.traerGifNuevo()*/  /*console.log(this.state.gif)*/}>Actualizar</button>
      </div>
    );
  }
}

export default ApiTres;
