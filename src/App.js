import React, { Component } from 'react';
import './App.css';

import CircleSelector from './components/CircleSelector/CircleSelector';

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
          YOUR TWO COMPONENTS WILL GO HERE
          <CircleSelector 
            handleButtonClick={this.handleButtonClick}

          />
          {/* <Circle /> */}
        </main>
      </div>
    );
  }
}

export default App;