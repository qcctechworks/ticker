import React, {Component} from 'react'


class Ticker extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
    }
  }

  //LifeCycle methods
  componentDidMount () {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextState.count % 3 === 0)
  }


  //this is a custom method
  reset = () => {
    this.setState({
      count: 0,
    })
  }

  render () {
    return (
      <div>
        <p>The ticker is: {this.state.count}</p>
        <button onClick={this.reset} type="button">Reset the Ticker</button>
      </div>
    );
  };
};

export default Ticker;
