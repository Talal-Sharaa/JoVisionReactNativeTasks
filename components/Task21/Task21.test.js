import React from "react";
import { shallow } from "enzyme";
import Task21 from "./Task21";

describe("Task21", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task21 />);
    expect(wrapper).toMatchSnapshot();
  });
});
