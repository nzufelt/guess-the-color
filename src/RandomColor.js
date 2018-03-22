import React, { Component } from 'react';
import './RandomColor.css';

export default class RandomColor extends Component {
  constructor(props) {
    super(props);
    const color = this.generateColor();
    this.state = {
      color: color,
      complement: this.complement(color),
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generateHexPair() {
    let num = (Math.floor(Math.random() * 256));
    if (num < 16) return '0' + num.toString(16);
    return num.toString(16);
  }

  complement(inputColor) {
    let col = {
      red: parseInt(inputColor.substring(1, 3), 16),
      green: parseInt(inputColor.substring(3, 5), 16),
      blue: parseInt(inputColor.substring(5, 7), 16)
    };
    return '#' + (256 - col.red).toString(16)
      + (256 - col.green).toString(16)
      + (256 - col.blue).toString(16);
  }

  generateColor() {
    return '#' + this.generateHexPair()
      + this.generateHexPair()
      + this.generateHexPair();
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.clicked) {
      this.mainDiv.style["background-color"] = this.state.color;
      this.colorText.style["color"] = this.state.complement;
      this.setState({clicked: true});
    } else {
      this.mainDiv.style["background-color"] = "#ebebeb";
      this.colorText.style["color"] = "black";
      const color = this.generateColor();
      this.setState({
        color: color,
        complement: this.complement(color),
        clicked: false,
      });
    }
  }

  render() {
    return (
      <div
        className="color-box"
        ref={(ref) => this.mainDiv = ref}
        onClick={this.handleClick}
      >
        <p
          className="color-text"
          ref={(ref) => this.colorText = ref}
        >
          {this.state.color}
        </p>
      </div>
    );
  }
}
