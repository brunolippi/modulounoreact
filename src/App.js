import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="nav navbar-nav">
          <a class="nav-item nav-link active font-weight-bold" href="#">Registro Civil Online <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Ingresar</a>
          <a class="nav-item nav-link active" href="#">Registrarse</a>
        </div>
      </nav>
      <div class='container-fluid'>
        <div class='row'>
          <nav class="col-1 sidebar" id='sidebar'>
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <hr></hr>
                <hr></hr>
                <li class="nav-item">Regístrese para ver</li>
                <li class="nav-item">más opciones.</li>
              </ul>
            </div>
          </nav>
          <div class='col-11'>
            <Register />
          </div>
        </div>
      </div>
      <footer>
        <nav class="nav justify-content-center text-light">
          <h6 style={{fontSize: 9}}>2020 - UTN e-Learning - Bruno Lippi - Trabajo práctico Módulo 1</h6>
        </nav>
      </footer>
    </div>
  );
}

export default App;
