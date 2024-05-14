import React from "react";
import { shallow } from "enzyme";
import Task25 from "./Task25";

describe("Task25", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task25 />);
    expect(wrapper).toMatchSnapshot();
  });
});
