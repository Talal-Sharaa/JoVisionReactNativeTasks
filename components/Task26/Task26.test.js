import React from "react";
import { shallow } from "enzyme";
import Task26 from "./Task26";

describe("Task26", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task26 />);
    expect(wrapper).toMatchSnapshot();
  });
});
