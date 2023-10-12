import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Caja from './components/Caja';
import CajaDos from './components/CajaDos';
import CajaTres from './components/CajaTres';
import ApiUno from './components/ApiUno';
import ApiDos from './components/ApiDos';
import ApiTres from './components/ApiTres';
import ApiCuatro from './components/ApiCuatro';

function App() {
  return (
    <div className="App">
      <header className='header'> 
        <Header/>
      </header>
      <main className='main'> 
        <Main/>
       <br/>
       <div className='container'> 
  
      <Caja titulo="USUARIOS" numero={<ApiUno/>}/>
    
      <Caja titulo="PRODUCTOS" numero= {<ApiDos/>}/>
       </div>
       <div class="raya"> . </div>
       <div className='container'> 
  
  <CajaDos titulo="USUARIO" numero={<ApiTres/>}/>
  <CajaDos titulo="PRODUCTO" numero={<ApiCuatro/>}/>
  <CajaTres titulo="ECONOMICO" numero= "undefined"/>

   </div>
        <br/>
       </main>
       <br/>
       <br/>
       <br/>   
       <footer className='footer'> 
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
