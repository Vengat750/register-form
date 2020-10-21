import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogo } from '../actions';
import '../css/company-details.css';
import '../css/upload.css';

class Upload extends Component {
  state = {
    logo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ logo: reader.result });
        this.props.setLogo(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  render() {
    const { logo } = this.state
    return (
      <div className="image-holder">
        <img src={logo} alt="" id="img" className="img" />
        <div>
          <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
          <label className="image-label" htmlFor="input">Upload your company logo</label>
        </div>
      </div>
    );
  }
}



export default connect(null,{setLogo})(Upload);
