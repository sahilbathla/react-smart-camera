import React, { Component } from 'react';
import Camera from 'react-camera-extended';
import './CameraInterface.scss';
import Constants from '../../common/Constants';
import { Redirect } from 'react-router-dom';
import * as RecordIcon from '../../assets/images/record-icon.png';


export default class CameraInterface extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cameraState: Constants.CAMERA_STATES.OPEN,
      previewSrc: null
    }
  }

  componentDidMount() {
    this.props.history.push({ pathname: '/' });
  }

  takePicture = () => {
    if (!this.camera || !this.camera.state.enabled) { return; }
    const previewSrc = this.camera.capture();
    this.setState(({ cameraState: Constants.CAMERA_STATES.PREVIEW, previewSrc }));
  };

  render() {
    if (this.state && this.state.previewSrc) {
      const src = this.state.previewSrc;
      return(
        <Redirect
          to={{
            pathname: '/camera-preview',
              state: { src }
          }}
        />
      )
    } else {
      return (
        <div className="camera-interface">
          <Camera ref={(cam) => { this.camera = cam;}} tryRearCamera={true} />
          <footer className="camera-interface__footer" >
            <img src={RecordIcon}  className="camera-interface__footer__capture-button" onClick={this.takePicture} alt="recordIcon">
            </img>
          </footer>
        </div>
      );
    }
  }
}
