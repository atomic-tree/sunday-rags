// https://github.com/JedWatson/react-alt-text/blob/master/lib/AltText.js

import React, { Component } from 'react';
import vkey from 'vkey';


class AltText extends Component {
  constructor(props) {
    super(props);

    this.state({
      modified: false
    });
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown, false);
    document.body.addEventListener('keyup', this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
    document.body.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyDown(e) {
    if (vkey[e.keyCode] !== this.props.modifier) return;
    this.setState({
      modified: true
    });
  }

  handleKeyUp(e) {
    if (vkey[e.keyCode] !== this.props.modifier) return;
    this.setState({
      modified: false
    });
  }

  render() {
    return (
      <span {...this.props}>
        {this.state.modified ? this.state.modified : this.props.normal}
      </span>
    );
  }
}

// default component values
AltText.defaultProps = {
  component: 'span',
  modifier: '<alt>',
  normal: '',
  modified: ''
};

export default AltText;