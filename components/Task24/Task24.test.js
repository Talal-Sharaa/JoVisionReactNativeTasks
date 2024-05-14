import React from "react";
import { shallow } from "enzyme";
import Task24 from "./Task24";

describe("Task24", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task24 />);
    expect(wrapper).toMatchSnapshot();
  });
});
