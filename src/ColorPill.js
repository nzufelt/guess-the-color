import React, { Component } from 'react';
import './ColorPill.css';

export default class ColorPill extends Component {
  render() {
    return (
      <div
        className="color-pill"
        style = {{
          "visibility": this.props.hidden ? "hidden" : "visible",
          "opacity": this.props.hidden ? 0 : 1,
        }}
      >
        <div
          className= "pill-box"
          style={
            {
              "border": `3px solid ${this.props.color}`
            }
          }
        >
          <div
            className="pill-filling"
            style={
              {
                "background-color": this.props.color,
                "height": (this.props.colorValue / 2.56).toString() + "%",
              }
            }
          >
          </div>
        </div>
        <p style={{"color":this.props.complement}}>
          {this.props.colorValue}
        </p>
      </div>
    );
  }
}
