import React from "react";
import { shallow } from "enzyme";
import Task18 from "./Task18";

describe("Task18", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task18 />);
    expect(wrapper).toMatchSnapshot();
  });
});
