import React from "react";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

import Locations from "./datas/locations";

import ConnectedApp, { App } from "./App";
import expectExport from "expect";

describe("<App />", () => {
  const actions = {
    loadForecast: jest.fn().mockResolvedValue(
      Promise.resolve({
        payload: {
          error: {},
          forecast: {
            currently: {}
          }
        }
      })
    )
  };
  const error = {};
  const forecast = {};

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App actions={actions} error={error} forecast={forecast} />
    );
  });

  test("should render Header", () => {
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  test("should render section selection cities", () => {
    expect(wrapper.find(".select-city__wrapper")).toHaveLength(1);
    expect(wrapper.find(".select-city__wrapper").find("h2")).toHaveLength(1);
    expect(
      wrapper
        .find(".select-city__wrapper")
        .find("h2")
        .text()
    ).toEqual("Get current weather");
    expect(
      wrapper.find(".select-city__wrapper").find("SelectCity")
    ).toHaveLength(1);
    expect(
      wrapper
        .find(".select-city__wrapper")
        .find("SelectCity")
        .prop("cities")
    ).toEqual(Locations.cities);
    expect(
      wrapper
        .find(".select-city__wrapper")
        .find("SelectCity")
        .prop("handleChange")
    ).toEqual(wrapper.instance().handleChange);
    expect(
      wrapper
        .find(".select-city__wrapper")
        .find("SelectCity")
        .prop("reboot")
    ).toEqual(wrapper.instance().reset);
  });

  test("should render section weather response", () => {
    expect(wrapper.find(".weather-response__wrapper")).toHaveLength(1);
    expect(wrapper.find(".weather-infos__wrapper")).toHaveLength(1);
    wrapper.setState({ isLoading: true });
    wrapper.update();
    expect(wrapper.find("Spinner")).toHaveLength(1);
    wrapper.setState({ isLoading: false, displayForecast: true });
    wrapper.update();
    expect(wrapper.find("Widget")).toHaveLength(1);
  });

  describe("methods", () => {
    test("hanleChange()", () => {
      const lat = 1;
      const lng = 1;
      const location = "paris";

      wrapper.instance().handleChange(lat, lng, location);
      expect(wrapper.state("isLoading")).toBeTruthy();
      expect(
        wrapper.instance().props.actions.loadForecast
      ).toHaveBeenCalledTimes(1);
      expect(
        wrapper.instance().props.actions.loadForecast
      ).toHaveBeenCalledWith(1, 1);

      wrapper
        .instance()
        .props.actions.loadForecast()
        .then(() => {
          expect(wrapper.state("isLoading")).toBeFalsy();
          expect(wrapper.state("displayForecast")).toBeTruthy();
          expect(wrapper.state("locationWeather")).toEqual("paris");
        });
    });

    test("reset()", () => {
      wrapper.instance().reset();
      expect(wrapper.state("displayForecast")).toBeFalsy();
    });
  });

  test("should map state to props correctly", () => {
    const mockStore = configureMockStore();
    const mockStoreState = {
      error: {},
      forecast: {}
    };
    const store = mockStore(mockStoreState);

    wrapper = shallow(<ConnectedApp store={store} />);

    const renderedProps = wrapper.props();

    expect(renderedProps.children.props.forecast).toStrictEqual(
      mockStoreState.forecast
    );
  });
});
