import React from "react";
import Footer from ".";

import { shallow } from "enzyme";

describe("<Footer />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test("should render Footer", () => {
    expect(wrapper.find("footer")).toHaveLength(1);
    expect(wrapper.find(".footer__inner-block")).toHaveLength(1);
    expect(wrapper.find("h4").text()).toEqual("Alexandre gadaix");
    expect(wrapper.find("small").text()).toEqual("2019");
  });
});
