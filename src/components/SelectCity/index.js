import React, { Component } from "react";
import PropTypes from "prop-types";

class SelectCity extends Component {
  change = e => {
    const selectedOption = e.target.value;
    const { cities, handleChange, reboot } = this.props;
    cities.forEach(city => {
      if (selectedOption === "default") reboot();
      if (city.name === selectedOption)
        handleChange(city.lat, city.lng, city.name);
    });
    this.setState({ value: selectedOption });
  };

  render() {
    const { cities } = this.props;
    return (
      <select className="select-component" onChange={this.change}>
        <option value="default" defaultValue>
          choose a city
        </option>
        {cities.map(city => (
          <option value={city.name} key={city.name} className="option-item">
            {city.name}
          </option>
        ))}
      </select>
    );
  }
}

SelectCity.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    })
  ),
  handleChange: PropTypes.func,
  reboot: PropTypes.func
};

SelectCity.defaultProps = {
  handleChange: () => {},
  reboot: () => {}
};

export default SelectCity;
