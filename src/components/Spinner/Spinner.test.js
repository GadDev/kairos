import React from "react";
import { shallow } from "enzyme";
import Spinner from ".";

describe("Spinner", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Spinner />);
  });

  test("render Spinner", () => {
    expect(wrapper.find(".spinner")).toBeTruthy();
  });
});
