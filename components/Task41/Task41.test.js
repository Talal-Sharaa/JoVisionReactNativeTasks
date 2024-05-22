import React from "react";
import { shallow } from "enzyme";
import Task41 from "./Task41";

describe("Task41", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task41 />);
    expect(wrapper).toMatchSnapshot();
  });
});
