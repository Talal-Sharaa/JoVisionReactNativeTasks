import React from "react";
import { shallow } from "enzyme";
import Task28 from "./Task28";

describe("Task28", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task28 />);
    expect(wrapper).toMatchSnapshot();
  });
});
