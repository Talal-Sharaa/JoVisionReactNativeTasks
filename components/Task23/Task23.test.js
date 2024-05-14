import React from "react";
import { shallow } from "enzyme";
import Task23 from "./Task23";

describe("Task23", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task23 />);
    expect(wrapper).toMatchSnapshot();
  });
});
