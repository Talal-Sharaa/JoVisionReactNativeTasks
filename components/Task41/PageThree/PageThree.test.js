import React from "react";
import { shallow } from "enzyme";
import PageThree from "./PageThree";

describe("PageThree", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PageThree />);
    expect(wrapper).toMatchSnapshot();
  });
});
