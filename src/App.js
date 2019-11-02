import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import classNames from "classnames";

import forecastActions from "./actions/forecast";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SelectCity from "./components/SelectCity";

import Spinner from "./components/Spinner";

import Locations from "./datas/locations";

export class App extends Component {
  state = {
    displayForecast: false
  };

  handleChange = (lat, lng) => {
    const { actions } = this.props;
    this.setState({ isLoading: true });
    actions.loadForecast(lat, lng).then(() => {
      this.setState({ displayForecast: true, isLoading: false });
    });
  };

  reset = () => {
    this.setState({ displayForecast: false });
  };

  render() {
    const { displayForecast, isLoading } = this.state;
    const { forecast } = this.props;
    const { currently } = forecast;
    const cities = Locations.cities;
    const appClass = classNames({
      AppWeather: true
    });

    return (
      <div className={appClass}>
        <Header />
        <main>
          <section>
            <h2>get current weather</h2>
            <SelectCity
              cities={cities}
              handleChange={this.handleChange}
              reboot={this.reset}
            />
          </section>
          <section>
            <div className="weather-infos__wrapper">
              {isLoading ? (
                <Spinner />
              ) : (
                displayForecast && (
                  <div>
                    <p>summary :{currently.summary}</p>
                    <p>apparentTemperature : {currently.apparentTemperature}</p>
                    <p>icon :{currently.icon}</p>
                    <p>precipIntensity : {currently.precipIntensity}</p>
                    <p>
                      precipIntensityError : {currently.precipIntensityError}
                    </p>
                    <p>temperature :{currently.temperature}</p>
                    <p>humidity : {currently.humidity}</p>
                  </div>
                )
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(forecastActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
