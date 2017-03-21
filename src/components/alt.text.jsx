import React, { Component, PropTypes } from 'react';
import blacklist from 'blacklist';
import vkey from 'vkey';


export default class AltText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modified: false
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
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
    let props = blacklist(this.props, 'component', 'modifier', 'normal', 'modified');
    return React.createElement(this.props.component, props,
      this.state.modified ? this.props.modified : this.props.normal);
  }
}


AltText.displayName = 'AltText';

// default component values
AltText.defaultProps = {
  component: 'span',
  modifier: '<alt>',
  normal: '',
  modified: ''
};

// validation rules
AltText.propTypes = {
  modifier: PropTypes.string.isRequired
};