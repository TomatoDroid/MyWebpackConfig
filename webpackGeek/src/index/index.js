import React from "react";
import ReacrDOM from "react-dom";
import "./index.less";
import logo from "./img/img.png";

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = { Text: null }
  }

  load(){
    import('./text').then(Text => {
      this.setState({
        Text: Text.default
      })
    })
  }

  render() {
    const {Text} = this.state
    return (
      <div className="index">
        {
          Text ? <Text/> : null
        }
        Hello React --babel
        <p className="web-font">哈哈dsadsa</p>
        <img src={logo} onClick={this.load.bind(this)}/>
      </div>
    );
  }
}

ReacrDOM.render(<Search />, document.getElementById("root"));
