import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Caja from './components/Caja';
import CajaDos from './components/CajaDos';
import CajaTres from './components/CajaTres';
/*import Saltopag from './components/saltopag'; fila entre main y footer*/
/*<div className='extra'> 
       <Saltopag/>
       </div> */
import ApiUno from './components/ApiUno';
import ApiDos from './components/ApiDos';
import ApiTres from './components/ApiTres';
import ApiCuatro from './components/ApiCuatro';
import ApiCinco from './components/ApiCinco';

function App() {
  
  return (
    <div className="App">
      <header className='header'> 
        <Header/>
      </header>
      <main className='main'> 
        <Main titulo="PANELES SIMPLES"/>
       <br/>
       <div className='container'> 
  
      <Caja titulo="USUARIOS" numero={<ApiUno/>} icon={<i className="fa-solid fa-user"></i>}/>
    
      <Caja titulo="PRODUCTOS" numero= {<ApiDos/>} icon={<i className="fa-solid fa-bag-shopping"></i>}/>
       </div>
       <div class="raya"> . </div>
       <Main titulo="PANELES CON DATOS"/>
       <div className='container'> 
  <CajaDos titulo="USUARIO" numero={<ApiTres/>} icon={<i className="fa-solid fa-person"></i>}/>
  <CajaDos titulo="PRODUCTO" numero={<ApiCuatro/>} icon={<i className="fa-solid fa-business-time"></i>}/>
  <CajaTres titulo="ECONOMICO" numero= {<ApiCinco/>} icon={<i className="fa-solid fa-hand-holding-heart"></i>}/>
  

   </div>
      
       </main>
       
       <footer className='footer'> 
      <Footer/>
   
      
  
      </footer>
      
    </div>
  );
}

export default App;
