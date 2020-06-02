import React, { Component } from 'react';
import './App.css';

import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      selCircleIdx: 0
    }
  }

  handleButtonClick = (circleIdx) => {
    this.setState({ selCircleIdx: circleIdx});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            handleButtonClick={this.handleButtonClick}
            selCircleIdx={this.state.selCircleIdx}
          />
          <Circles 
            selCircleIdx={this.state.selCircleIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;