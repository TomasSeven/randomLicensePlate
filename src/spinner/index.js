import React, { Component } from "react";
import Spinner from "react-spinkit";
import * as FaIconPack from "react-icons/fa";
//var Spinner = require('react-spinkit');

export default class SpinnerComp extends Component {
  state = {
    spinning: false
  };

  spinn = () => {
    this.setState({ spinning: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ spinning: false });
    }, 1000);
  };

  render() {
    const { spinning } = this.state;

    return (
      <div style={{ marginTop: "30px" }}>
        <button className="button" onClick={this.spinn} disabled={spinning}>
          {spinning && (
            <Spinner
              name="double-bounce"
              className="spinner-icon"
              fadeIn="quarter"
            />
          )}
          {!spinning && <FaIconPack.FaSyncAlt className="refresh-icon" />}
        </button>
      </div>
    );
  }
}
