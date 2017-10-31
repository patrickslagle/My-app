import React, { Component } from 'react';
import Counter from './Counter.jsx';

import '../styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount(e) {
    const obj = Object.assign({}, this.state);
    let count = obj.count;
    
    if (e.target.name === 'add') count += 1;
    else count -= 1;

    this.setState({ count });
  }

  render() {
    return (
      <div className="app-container">
        Your First React Application
        <Counter handleCount={this.handleCount} count={this.state.count} />
      </div>
    )
  };
}

export default App;
