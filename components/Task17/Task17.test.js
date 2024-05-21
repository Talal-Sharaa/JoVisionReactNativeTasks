import React from "react";
import { shallow } from "enzyme";
import Task17 from "./Task17";

describe("Task17", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task17 />);
    expect(wrapper).toMatchSnapshot();
  });
});
