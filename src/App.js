import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Caja from './components/Caja';
import ApiUno from './components/ApiUno';
import ApiDos from './components/ApiDos';

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
        <br/>
       </main>
      <footer className='footer'> 
         <Footer/>
      </footer>
    </div>
  );
}

export default App;
