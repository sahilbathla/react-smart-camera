import React, { Component } from 'react';
import './CameraPreview.scss';
import ImageService from '../../services/http/ImageService';
import ExifOrientationImg from 'react-exif-orientation-img';

export default class ImagePreview extends Component {

  constructor(props){
    super(props);
    this.state = { uploading: false }
  }

  componentWillMount() {
    if (!this.props.location.state || !this.props.location.state.src) { window.location = '/'; }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  uploadPicture = () => {
    this.setState({ uploading: true });
    new ImageService().upload({ image: this.props.location.state.src, to: process.env.REACT_APP_EMAIL }).then(() => {
      alert('Picture uploaded successfully, going back!');
      this.props.history.goBack();
    }).catch((e) => {
      alert('Upload failed');
    }).finally(() => {
      this.setState({ uploading: false });
    });
  };

  render() {
    return (
      <div className="camera-preview">
        { this.state.uploading && <div class="camera-preview__loader">
            <div class="camera-preview__loader__message">Uploading...</div>
          </div>
        }
        <ExifOrientationImg className="camera-preview__image" src={this.props.location.state.src}/>
        <footer className="camera-preview__footer">
            <div className="camera-preview__footer__button-left" onClick={this.goBack}>Abbruch</div>
            <div className="camera-preview__footer__button-right" onClick={this.uploadPicture}>Fertig</div>
        </footer>
      </div>
    )
  }
}
