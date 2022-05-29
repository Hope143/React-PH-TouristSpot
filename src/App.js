import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/page/Home';

function App() {

  return (
    <>
      <section>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </section>
    </>
  );
}

export default App;
