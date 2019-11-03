import React from "react";
import SelectCity from ".";

import { shallow } from "enzyme";

describe("<SelectCity />", () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      cities: [
        {
          name: "New-York",
          lat: 40.73061,
          lng: -73.935242
        },
        {
          name: "Singapore",
          lat: 1.29027,
          lng: 103.851959
        }
      ],
      handleChange: jest.fn(),
      reboot: jest.fn()
    };

    wrapper = shallow(<SelectCity {...props} />);
  });

  test("should render a select with 3 options", () => {
    expect(wrapper.find("select.select-component")).toHaveLength(1);
    expect(wrapper.find("option")).toHaveLength(3);
  });

  test("render default option", () => {
    expect(
      wrapper
        .find("select.select-component")
        .find("option")
        .first()
        .text()
    ).toEqual("choose a city");
  });

  // test('should trigger change method ', () => {
  //     const mockChange = jest.fn();
  //     // wrapper.change = mockChange;
  //     const event = {
  //         target: { value: 'New-York' }
  //     };
  //     console.log(wrapper.change)
  //     wrapper.find('select').simulate('change', event);
  //     expect(wrapper.find('option:selected').props().value).toBe("100");
  // });

  test("methods change", () => {
    const spyChange = jest.spyOn(wrapper.instance(), "change");
    const event = {
      target: {
        value: "New-York"
      }
    };
    wrapper.instance().change(event);
    expect(wrapper.state("value")).toEqual("New-York");
    expect(spyChange).toHaveBeenCalled();
  });

  test("methods change ON DEFAULT VALUE", () => {
    const event = {
      target: {
        value: "default"
      }
    };

    wrapper.instance().change(event);
    expect(wrapper.state("value")).toEqual("default");
  });
});
