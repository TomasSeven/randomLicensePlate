import React from "react";
import { render } from "react-dom";
import cleanreg from "./images/cleanreg.jpg";
import "./styles.css";

class DisplayImg extends React.Component {
  render() {
    const style = {
      width: "500px",
      height: "200px",
      backgroundImage: "url(" + this.props.imgUrl + ")",
      backgoundRepeat: "no-repeat",
      backgroundSize: "500px 200px"
    };

    return <div style={style} />;
  }
}

class DisplayNew extends React.Component {
  render() {
    const style = {
      width: "800px",
      height: "200px",
      backgroundImage: "url(" + this.props.imgUrl + ")",
      textAlign: "center"
    };

    return (
      <div className="container">
        <img src={cleanreg} alt="Snow" stylea="width:100%;" />
        <div className="centered">{this.props.random}</div>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: "ABC123", random2: "CBA321" };
  }

  handleClick() {
    const min = 100;
    const max = 999;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    const rand2 = Math.floor(Math.random() * (max - min + 1)) + min;
    var text = "";
    var text2 = "";
    var possible = "ABCDEFGHJKLMNOPRSTUWXYZ";

    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    for (var i = 0; i < 3; i++)
      text2 += possible.charAt(Math.floor(Math.random() * possible.length));
    this.setState({ random: text + rand, random2: text2 + rand2 });
  }

  DisplayImg() {
    const style = {
      backgroundImage: "url(" + this.props.imgUrl + ")",
      textAlign: "left"
    };

    return <div style={style}> </div>;
  }

  DisplayNew() {
    const style = {
      backgroundImage: "url(" + this.props.imgUrl + ")",
      position: relative
    };

    return <div style={style}> </div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Generate random Regnumber</h3>
          <button
            className="btn btn-primary"
            onClick={this.handleClick.bind(this)}
          >
            {" "}
            Generate RegNo
          </button>
          <h1 className="card" style={{ marginTop: "10px" }} />

          <div className="container">
            <DisplayNew imgUrl={cleanreg} />
            <div className="centered">{this.state.random}</div>
          </div>
        </div>
        <h1 className="card" style={{ marginTop: "50px" }} />
        <div>
          <div className="container">
            <img src={cleanreg} alt="Snow" stylea="width:100%;" />
            <div className="centered">{this.state.random2}</div>
          </div>
        </div>
      </div>
    );
  }
}

render(<Button />, document.getElementById("container"));
