import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Products';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    < >
      <Router>
        < Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services'  component={Services}/>
            <Route path='/products'  component={Product}/>
            <Route path='/sign-up'  component={SignUp}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
  