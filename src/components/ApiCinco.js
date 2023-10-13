import React, { Component } from 'react';
import "../css/Main.css"

class ApiCinco extends Component {
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
    const url = `https://veganit-omlm.onrender.com/products/cheaper?timestamp=${new Date().getTime()}`;
   /*this.apiCall("https://veganit-omlm.onrender.com/users/api", this.mostrarGif);*/
   this.apiCall(url, this.mostrarGif);
  
 }
 mostrarGif = data => {
    if (data.data) {
      const economico = data.data;
      this.setState({
        gif: /*economico.nombre,*/ /*`Nombre: ${economico.nombre} / Precio: ${economico.precio}$/ Imagen: ${economico.imagen}`,*/(
            <div>
              <p>Nombre: {economico.nombre}/ Precio: {economico.precio}$</p>
              <img width="125px" src={economico.imagen} alt={economico.nombre} />
            </div>
          ),
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
      contenido = <p> {this.state.gif} </p>;
    }

    return (
      <div>
        {contenido}
        <button onClick={this.actualizarGif/*() => this.traerGifNuevo()*//*console.log(this.state.gif)*/}>Actualizar</button>
      </div>
    );
  }
}

export default ApiCinco;
