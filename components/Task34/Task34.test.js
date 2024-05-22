import React from "react";
import { shallow } from "enzyme";
import Task34 from "./Task34";

describe("Task34", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task34 />);
    expect(wrapper).toMatchSnapshot();
  });
});
