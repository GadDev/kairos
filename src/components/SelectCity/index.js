import React, { Component } from "react";

class SelectCity extends Component {
  change = e => {
    const selectedOption = e.target.value;
    const { cities, handleChange, reboot } = this.props;
    cities.forEach(city => {
      if (selectedOption === "default") reboot();
      if (city.name === selectedOption) handleChange(city.lat, city.lng);
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

export default SelectCity;
