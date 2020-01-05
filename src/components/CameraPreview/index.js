import React, { Component } from 'react';
import './CameraPreview.scss';
import ExifOrientationImg from 'react-exif-orientation-img';

export default class ImagePreview extends Component {

  componentWillMount() {
    if (!this.props.location.state || !this.props.location.state.src) { window.location = '/'; }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  uploadPicture = () => {
    alert('Picture uploaded successfully, going back!');
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="camera-preview">
        <ExifOrientationImg className="camera-preview__image" src={this.props.location.state.src}/>
        <footer className="camera-preview__footer">
            <div className="camera-preview__footer__button-left" onClick={this.goBack}>Abbruch</div>
            <div className="camera-preview__footer__button-right" onClick={this.uploadPicture}>Fertig</div>
        </footer>
      </div>
    )
  }
}
