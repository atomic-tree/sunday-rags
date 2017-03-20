import React, { Component } from 'react';
import './stylesheets/profile.scss';

export default class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <a href={this.props.link}>{this.props.name}</a>
      </div>
    );
  }
}
