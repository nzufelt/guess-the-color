import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component
{
  render() {
    return (
      <footer>
        <p>
          A simple app created by <a href="https://twitter.com/nicholaszufelt">Nicholas Zufelt</a>.  The code is available on <a href="https://github.com/nzufelt/guess-the-color">GitHub</a>.
        </p>
      </footer>
    );
  }
}
