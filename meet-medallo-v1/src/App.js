import React from 'react';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

import Navbar from './componentes/Navbar';
import SeleccionarDestino from './paginas/Selecionar Destino';
import SitiosSugeridos from './paginas/SitiosSugeridos';
import   MiUbicacion from './paginas/MiUbicacion';
import Calificacion from './paginas/Calificacion';
import Contactanos from './paginas/Contactanos';
import Configuracion from './paginas/Configuracion';
import Login from './Login/login';
import Menu from './Login/menu';




function App() {
  return (
    <>
  
      
    <BrowserRouter>
     
       <Switch>
       
       <Route exact path="/" component={Login}/>
       <Route exact path="/menu" component={Menu}/>
       
       <Navbar />
         <Route path='/seleccionardestino' exact component={SeleccionarDestino} />
         <Route path='/sitiossugeridos' component={SitiosSugeridos} />
         <Route path='/miubicacion' component={MiUbicacion} />  
         <Route path='/calificacion' component={Calificacion} />  
         <Route path='/Contactanos' component={Contactanos} />  
         <Route path='/sesion' component={Configuracion} />  
         
       </Switch>
       </BrowserRouter>

    </>

  );
}

export default App;
