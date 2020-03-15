/*---------------------------------------------- */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/*----------------- COMPONENTS -------------------*/
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import NuevoProducto from './components/Productos/NuevoProducto';
import EditarProducto from './components/Productos/EditarProducto';

/*------------------ REDUX -----------------------*/
import { Provider } from 'react-redux'
import store from './store/store'

import './App.css';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Provider store={store}>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listado" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route exact path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>

  );
}

export default App;
