import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import classNames from "classnames";

import forecastActions from "./actions/forecast";

import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";

import Spinner from "./components/Spinner";

import Locations from "./datas/locations";

export class App extends Component {
  state = {
    displayForecast: false
  };

  handleClickButton = (lat, lng) => {
    const { actions } = this.props;
    actions.loadForecast(lat, lng);
    this.setState({ displayForecast: true });
  };

  render() {
    const { displayForecast } = this.state;
    const { forecast } = this.props;
    const cities = Locations.cities;
    const appClass = classNames({
      App: true
    });

    const forecastModal = (
      <Modal onDismiss={() => this.setState({ displayForecast: false })}>
        <section>
          {forecast.currently && !forecast.forecastIsloading && (
            <div>{forecast.currently && forecast.currently.summary}</div>
          )}
        </section>
      </Modal>
    );

    return (
      <div className={appClass}>
        <Header />
        <main>
          <section>
            <List>
              {cities.map(city => (
                <Button
                  key={city.name}
                  name={city.name}
                  clickAction={() => this.handleClickButton(city.lat, city.lng)}
                />
              ))}
            </List>
          </section>
          {displayForecast && forecastModal}
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
