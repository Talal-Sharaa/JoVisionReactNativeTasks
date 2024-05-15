import React from "react";
import { shallow } from "enzyme";
import Task27 from "./Task27";

describe("Task27", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task27 />);
    expect(wrapper).toMatchSnapshot();
  });
});
