import React, { Component } from 'react';
import './RandomColor.css';
import ColorPill from './ColorPill'

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

  toHex(num) {
    if (num < 16) return '0' + num.toString(16);
    return num.toString(16);
  }

  complement(color) {
    let comp = {};
    comp["red"] = 256 - color.red;
    comp["green"] = 256 - color.green;
    comp["blue"] = 256 - color.blue;
    comp["hex"] = '#' + this.toHex(comp.red)
      + this.toHex(comp.green)
      + this.toHex(comp.blue);

    return comp;
  }

  generateColor() {
    let color = {};
    color["red"] = Math.floor(Math.random() * 256);
    color["green"] = Math.floor(Math.random() * 256);
    color["blue"] = Math.floor(Math.random() * 256);
    color["hex"] = '#' + this.toHex(color.red)
      + this.toHex(color.green)
      + this.toHex(color.blue);

    return color;
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.state.clicked) {
      this.mainDiv.style["background-color"] = this.state.color.hex;
      // this.colorText.style["color"] = this.state.complement.hex;
      this.setState({clicked: true});
    } else {
      this.mainDiv.style["background-color"] = "#ebebeb";
      // this.colorText.style["color"] = "black";
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
      <div>
        <div
          className="color-box"
          ref={(ref) => this.mainDiv = ref}
          onClick={this.handleClick}
        >
          {["red", "green", "blue"].map((comp) =>
            <ColorPill
              color={comp}
              colorValue={this.state.color[comp]}
              hidden={!this.state.clicked}
              complement={this.state.complement.hex}
            />
          )}
        </div>
        <p
          className="color-text"
          ref={(ref) => this.colorText = ref}
        >
          {this.state.color.hex}
        </p>
      </div>
    );
  }
}
