import React from "react";
import { shallow } from "enzyme";
import Task38 from "./Task38";

describe("Task38", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task38 />);
    expect(wrapper).toMatchSnapshot();
  });
});
