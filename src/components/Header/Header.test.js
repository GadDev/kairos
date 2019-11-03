import React from "react";
import Header from ".";

import { shallow } from "enzyme";

describe("<Header />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  test("should render Header", () => {
    expect(wrapper.find("header")).toHaveLength(1);
    expect(wrapper.find(".logo-wrapper")).toHaveLength(1);
  });
});
