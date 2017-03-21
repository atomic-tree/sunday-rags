import React, { Component } from 'react';
import 'stylesheets/profile';

export default class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <a href={this.props.link} target='_blanck'>{this.props.name}</a>
      </div>
    );
  }
}
