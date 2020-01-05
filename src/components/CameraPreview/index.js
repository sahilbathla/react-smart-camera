import React, { Component } from 'react';
import './CameraPreview.scss';
import ExifOrientationImg from 'react-exif-orientation-img';

export default class ImagePreview extends Component {
  render() {
    return (
      <div className="camera-preview">
        <ExifOrientationImg className="camera-preview__image" src={this.props.location.state.src}/>
        <footer className="camera-preview__footer">
            <button>Back</button>
        </footer>
      </div>
    )
  }
}
