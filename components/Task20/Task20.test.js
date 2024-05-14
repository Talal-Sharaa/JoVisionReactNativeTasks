import React from "react";
import { shallow } from "enzyme";
import Task20 from "./Task20";

describe("Task20", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task20 />);
    expect(wrapper).toMatchSnapshot();
  });
});
