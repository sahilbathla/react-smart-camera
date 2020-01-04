import React, { Component } from 'react';
import './CameraPreview.scss';

export default class ImagePreview extends Component {
  render() {
    return (
      <div className="camera-preview">
        <img src={this.props.src} />
      </div>
    )
  }
}
