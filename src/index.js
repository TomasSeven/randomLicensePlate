import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 'ABC123' };
  }

  handleClick() {
    this.state = { random: 'ABC123' };
    const min = 100;
    const max = 999;
    const rand =  Math.random() * (max - min);
    const rand2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const abc = Math.random().toString(36).substring(2, 15);
    var text = "";
    var possible = "ABCDEFGHJKLMNOPQRSTUWXYZ";
     
    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
     
    
    this.setState({ random: text+ rand2});
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">React Random Number Generator</h3>
          <p>Simple example for this question in Stackoverflow: <a href="https://stackoverflow.com/questions/45175836/random-number-using-react-js" target="_blank">https://stackoverflow.com/questions/45175836/random-number-using-react-js</a></p>
          <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>Click</button>
          <h1 className="card" style={{marginTop:"10px"}}>
            <div className="card-block">
              {this.state.random}
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

render(<Button />, document.getElementById('container'));
