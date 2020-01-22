import React from "react";
import { render } from "react-dom";
import * as FaIconPack from "react-icons/fa";
import cleanreg from "./images/cleanreg.jpg";
import Spinner from "./spinner/index";
import SpinnerKit from "react-spinkit";
import Ouroboro from "./spinner/test.js";
import "./styles.css";
import BabelLoading from "react-loadingg/lib/BabelLoading";
import * as Loading from "react-loadingg/lib";

//https://htmlcolorcodes.com/color-picker/
//https://html-color-codes.info/colors-from-image/

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

class DisplayLoading extends React.Component {
  render() {
    const style = {
      float: "Left"
    };

    return (
      <div>
        <Loading.TouchBallLoading style={style} color="#008cba" speed="0.7" />{" "}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.state = {
      isChecked: true,
      format: "Använd nya formatet",
      random: "ABC123",
      random2: "CBA321",
      seconds: 3,
      secondsSet: 3,
      useTimer: true,
      timer: 1000,
      status: true,
      insane: false,
      generating: false
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
      if (this.state.status) {
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1
          }));
        }
        if (seconds === 1) {
          this.setState({ generating: true });
        }

        if (seconds === 0) {
          this.handleClick();
          this.setState({ seconds: this.state.secondsSet, generating: false });
        }
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

  LoadingTest() {
    const { generating } = this.state.generating;
    return (
      <div>
        <Loading.TouchBallLoading color="#008cba" speed="0.3" />{" "}
      </div>
    );
  }

  //<Spinner /> - fungerar dåligt
  //<button
  //              className="btn btn-primary"
  //              onClick={this.handleClick.bind(this)}
  //            >
  //              <FaIconPack.FaMinusSquare />
  //            </button>

  render() {
    const { seconds } = this.state;
    const { loadingStyle } = "width: 50px";
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Skapa svenska regnumber</h1>
          <div>
            <div>
              <div />
            </div>
            <div>
              <div className="divtest">
                <div className="container-left"> Nytt regnummer om: </div>
                {seconds > 10 && (
                  <div className="container-right">
                    {seconds < 10 ? `0${seconds}` : seconds} sek
                  </div>
                )}
                {seconds >= 0 && (
                  <div className="container-right">
                    {" "}
                    {(this.state.generating || !this.state.generating) && (
                      <DisplayLoading />
                    )}
                  </div>
                )}
              </div>
              <div className="container-2" />
            </div>
          </div>
          <hr className="hr" />

          <div className="container">
            <DisplayNew imgUrl={cleanreg} />
            <div className="centered">{this.state.random}</div>
          </div>
        </div>

        <div>
          <div className="container">
            <img src={cleanreg} alt="Snow" stylea="width:100%;" />
            <div className="centered">{this.state.random2}</div>
          </div>
        </div>

        <div className="settings">
          <hr className="hr" />
          <span>Inställningar</span>

          <div className="set-timer">
            <span>Tid mellan nya regnummer</span>
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
              onClick={this.setStatus}
            >
              {!this.state.status && <FaIconPack.FaPlay />}
              {this.state.status && <FaIconPack.FaPause />}
            </button>
            <span>
              Aktiv: {this.state.status && "ja"} {!this.state.status && "nej"}{" "}
            </span>
          </div>
          <div>
            <button
              className="timerButton"
              id="format"
              onClick={this.handleChecked}
            >
              {!this.state.isChecked && <FaIconPack.FaToggleOn />}
              {this.state.isChecked && <FaIconPack.FaToggleOff />}
            </button>

            <label for="format">{this.state.format}</label>
            <span> (ABC12B)</span>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("container"));

/*
iv>
              <div>
                { seconds ===0 && <Loading.TouchBallLoading speed="0.5"/> }
                {seconds >= 0 ? (
                  <h3>Skapar regnummer</h3>
                  
                ) : (
                  <h3>
                    Nytt regnummer om: {seconds < 10 ? `0${seconds}` : seconds}{" "}
                    sek
                  </h3>
                )}
              </div>
 <Loading.NineCellLoading />
<Loading.BabelLoading />
<Loading.BlockLoading />
<Loading.BlockReserveLoading />
<Loading.BoxLoading />
<Loading.CircleLoading />
<Loading.CircleToBlockLoading />
--<Loading.CommonLoading />
--<Loading.DisappearedLoading />
<Loading.LoopCircleLoading />
<Loading.NineCellLoading />
---<Loading.TouchBallLoading />
<Loading.TransverseLoading />
--<Loading.WaveLoading />
<Loading.WaveTopBottomLoading />
<Loading.WindMillLoading />
<Loading.JumpCircleLoading />
<Loading.MeteorRainLoading />
<Loading.RotateCircleLoading />
<Loading.StickyBallLoading />
--<Loading.SemipolarLoading />
--<Loading.SolarSystemLoading />
<Loading.LadderLoading />
<Loading.HeartBoomLoading />
--<Loading.RollBoxLoading />
--<Loading.RectGraduallyShowLoading />
<Loading.PointSpreadLoading />
<Loading.ThreeHorseLoading />
<Loading.PassThrouthLoading />
<Loading.CoffeeLoading />
<Loading.BatteryLoading />
<Loading.DiamonLoading />
<Loading.EatLoading />

*/
