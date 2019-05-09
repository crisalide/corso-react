import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Gestore del click

    
  }

  render() {
    return (
      <div>
        <h1>Calcolatrice REACT</h1>
        <div id='calculator'>
          <Display />
          <Button label="7" click={() => console.log("Click del Button")} />
          <Button label="8" click={() => console.log("Click del Button")} />
          <Button label="9" click={() => console.log("Click del Button")} />
          <Button label="/" click={() => console.log("Click del Button")} orange />

          <Button label="4" click={() => console.log("Click del Button")} />
          <Button label="5" click={() => console.log("Click del Button")} />
          <Button label="6" click={() => console.log("Click del Button")} />
          <Button label="x" click={() => console.log("Click del Button")} orange />

          <Button label="1" click={() => console.log("Click del Button")} />
          <Button label="2" click={() => console.log("Click del Button")} />
          <Button label="3" click={() => console.log("Click del Button")} />
          <Button label="-" click={() => console.log("Click del Button")} orange />

          <Button label="0" click={() => console.log("Click del Button")} />
          <Button label="," click={() => console.log("Click del Button")} />
          <Button label="=" click={() => console.log("Click del Button")} />
          <Button label="+" click={() => console.log("Click del Button")} orange />
        </div>
      </div>
    );
  }
}

export default App;
