import React from "react";
import { shallow } from "enzyme";
import Task19 from "./Task19";

describe("Task19", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task19 />);
    expect(wrapper).toMatchSnapshot();
  });
});
