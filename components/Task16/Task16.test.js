import React from "react";
import { shallow } from "enzyme";
import Task16 from "./Task16";

describe("Task16", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task16 />);
    expect(wrapper).toMatchSnapshot();
  });
});
