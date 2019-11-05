import React from "react";
import Widget from ".";

import { shallow } from "enzyme";

const props = {
  weather: {
    icon: "clear",
    huminidy: 0,
    summary: "Clear",
    time: 1572952389,
    temperature: 70
  },
  location: "london"
};

describe("<Widget />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Widget {...props} />);
  });

  test("should render article with correct classname", () => {
    expect(wrapper.find(".weather-widget__wrapper.london")).toHaveLength(1);
  });

  test("should render the location", () => {
    expect(
      wrapper
        .find(".weather-widget__wrapper.london")
        .find("h3")
        .text()
    ).toEqual(props.location);
  });
});
