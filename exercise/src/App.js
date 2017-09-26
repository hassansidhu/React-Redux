import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
            <nav className="nav  justify-content-center App-Header">
                <a className="nav-link active App-Heading" href="#">Dashboard</a>
            </nav>
            <div >
                <Dashboard/>
            </div>
    </div>
    );
  }
}

export default App;
