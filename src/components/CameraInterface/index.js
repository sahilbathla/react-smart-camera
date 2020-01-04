import React, { Component } from 'react';
import './CameraInterface.scss';
import '../../assets/styles/global.scss';
import CameraPreview from '../CameraPreview';
import * as RecordIcon from '../../assets/images/record-icon.png';

import Camera from 'react-camera';

export default class CameraInterface extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture;
  }

  componentDidMount() {
    this.state = {
      cameraState: 'open'
    }
  }

  takePicture = () => {
    this.camera.capture()
      .then(blob => {
        this.camera.src = URL.createObjectURL(blob);
        this.setState(({cameraState: 'preview'}))
      })
  };

  render() {
    if (this.camera && this.camera.src) {
      return(
        <div>
          <CameraPreview src={this.camera.src} />
        </div>
      )
    } else {
      return (
        <div className="camera-interface">
          <Camera ref={(cam) => { this.camera = cam;}} />
          <footer className="camera-interface__footer" >
            <img src={RecordIcon}  className="camera-interface__footer__capture-button" onClick={this.takePicture} >
            </img>
          </footer>
        </div>
      );
    }
  }
}
