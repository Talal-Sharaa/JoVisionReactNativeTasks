import React from "react";
import { shallow } from "enzyme";
import Task22 from "./Task22";

describe("Task22", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task22 />);
    expect(wrapper).toMatchSnapshot();
  });
});
