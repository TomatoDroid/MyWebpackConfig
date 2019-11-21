import React from "react";
import ReacrDOM from "react-dom";
import "./index.less";
import logo from "./img/img.png";

class Search extends React.Component {
  render() {
    return (
      <div className="index">
        Hello React --babel
        <p className="web-font">aaaa你是真的皮</p>
        <img src={logo} />
      </div>
    );
  }
}

ReacrDOM.render(<Search />, document.getElementById("root"));
