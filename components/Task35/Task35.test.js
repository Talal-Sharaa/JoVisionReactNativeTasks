import React from "react";
import { shallow } from "enzyme";
import Task35 from "./Task35";

describe("Task35", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task35 />);
    expect(wrapper).toMatchSnapshot();
  });
});
