import './App.css';
import React from 'react'
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/pages/Home';


function App() {
  return (
    < >
      <Router>
        < Navbar />
          <Switch>
            <Route to='/' exact component={Home}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
