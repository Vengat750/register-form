import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCountry, setRegion } from '../actions';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Country extends Component {

  selectCountry(val) {
    this.props.setCountry(val);
  }

  selectRegion(val) {
    this.props.setRegion(val);
  }

  render() {
    const { country, region } = this.props;
    return (
      <div>
        <div>
          <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
            classes='dropdown region' />
        </div>
        <label>State</label>
        <div className=''>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
            classes='dropdown region'
          />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    country: state.details.country,
    region: state.details.region,
  }
}

export default connect(mapStateToProps, { setCountry, setRegion })(Country);