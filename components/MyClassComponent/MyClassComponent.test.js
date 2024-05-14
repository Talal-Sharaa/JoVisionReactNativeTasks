import React from "react";
import { shallow } from "enzyme";
import MyClassComponent from "./MyClassComponent";

describe("MyClassComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MyClassComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
