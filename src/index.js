import React from "react";
import { render } from "react-dom";
import * as FaIconPack from "react-icons/fa";
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
    this.handleChecked = this.handleChecked.bind(this);
    this.state = {
      isChecked: true,
      format: "Använd nya formatet",
      random: "ABC123",
      random2: "CBA321",
      seconds: 5,
      secondsSet: 5,
      useTimer: true,
      timer: 1000,
      status: true,
      insane: false
    };
  }
  increaseTimer = () => {
    const timerValue = this.state.secondsSet;
    if (timerValue < 5) {
      this.setState({ secondsSet: this.state.secondsSet + 1 });
    }
    if (timerValue > 0) {
      this.setState({ insane: false });
    }
    console.log("timer " + this.state.secondsSet);
  };
  decreaseTimer = () => {
    const timerValue = this.state.secondsSet;
    if (timerValue > 0) {
      this.setState({
        secondsSet: this.state.secondsSet - 1
      });
    }
    if (timerValue === 0) {
      this.setState({ insane: true, timer: 250 });
      console.log("insane " + this.state.insane);
    }
    console.log(
      "timer " +
        this.state.secondsSet +
        " insane " +
        this.state.insane +
        this.state.timer
    );
  };
  setStatus = () => {
    this.setState({ status: !this.state.status });
    console.log(this.state.status);
  };

  updateValue = e => {
    const value = e.target.value;
    //  console.log("helo " + this.state.secondsSet + " " + value);
    this.setState({ seconds: value, secondsSet: value });
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        this.handleClick();
        this.setState({ seconds: this.state.secondsSet });
      }
    }, 1000);
  }

  handleChecked() {
    var txt;
    if (this.state.isChecked) {
      txt = "Använd nya formatet";
    } else {
      txt = "Använd nya formatet";
    }
    this.setState({ isChecked: !this.state.isChecked, format: txt });
    console.log("format " + this.state.useTimer);
  }

  useTimer() {
    var timer = !this.state.useTimer;
    this.setState({ timer: timer });
    console.log("timer " + timer + this.state);
  }

  newFormat() {
    var txt;
    if (this.state.isChecked) {
      txt = "";
    } else {
      txt = "inte";
    }
    // remove () after handleChecked because you need pass
    // reference to function
    // also add return before <div>
    return (
      <div>
        <input type="checkbox" onChange={this.handleChecked} />
        <p>Ta {txt} med nya formatet </p>
      </div>
    );
  }

  handleClick() {
    //reset timer
    this.setState({ seconds: this.state.secondsSet });

    var text = "";
    var text2 = "";
    var text3 = "";
    var text4 = "";
    var possible = "ABCDEFGHJKLMNOPRSTUWXYZ";

    if (this.state.isChecked) {
    }

    for (var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    for (var j = 0; j < 3; j++)
      text2 += possible.charAt(Math.floor(Math.random() * possible.length));

    text3 = possible.charAt(Math.floor(Math.random() * possible.length));
    text4 = possible.charAt(Math.floor(Math.random() * possible.length));

    if (!this.state.isChecked) {
      const min1 = 10;
      const max1 = 99;
      const rand = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
      const rand2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;

      // console.log("rand " + text + rand + " rand2 " + text2 + rand2);
      this.setState({
        random: text + rand + text3,
        random2: text2 + rand2 + text4
      });
    }

    if (this.state.isChecked) {
      const min2 = 100;
      const max2 = 999;
      const rand = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
      const rand2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
      //  console.log("not rand " + text + rand + " rand2 " + text2 + rand2);
      this.setState({ random: text + rand, random2: text2 + rand2 });
    }
  }

  DisplayImg() {
    const style = {
      backgroundImage: "url(" + this.props.imgUrl + ")",
      textAlign: "left"
    };

    return <div style={style}> </div>;
  }

  DisplayNewaa() {
    const style = {
      backgroundImage: "url(" + this.props.imgUrl + ")"
    };

    return <div style={style}> </div>;
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Generate random Regnumber</h1>
          <div>
            <div>
              <button
                className="btn btn-primary"
                onClick={this.handleClick.bind(this)}
              >
                {" "}
                Generate Now
              </button>
            </div>
            <div>
              <input
                type="checkbox"
                id="format"
                onChange={this.handleChecked}
              />
              <label for="format">{this.state.format}</label>
              <div>
                {seconds === 0 ? (
                  <h3>Generating!</h3>
                ) : (
                  <h3>
                    Time Remaining: {seconds < 5 ? `0${seconds}` : seconds}
                  </h3>
                )}
              </div>
              <div>
                <div className="set-timer">
                  <span>Timer</span>
                  <button
                    className="timerButton"
                    id="decrease-timer"
                    onClick={this.decreaseTimer}
                  >
                    <FaIconPack.FaMinusSquare />
                  </button>
                  <span>{this.state.secondsSet} sec</span>
                  <button
                    className="timerButton"
                    id="increaseTimer"
                    onClick={this.increaseTimer}
                  >
                    <FaIconPack.FaPlusSquare />
                  </button>
                  <button
                    className="timerButton"
                    id="status"
                    onChange={this.setStatus}
                  >
                    {!this.state.status && <FaIconPack.FaPlay />}
                    {this.state.status && <FaIconPack.FaPause />}
                  </button>
                </div>
              </div>
            </div>
          </div>
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
