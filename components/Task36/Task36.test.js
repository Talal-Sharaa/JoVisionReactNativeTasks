import React from "react";
import { shallow } from "enzyme";
import Task36 from "./Task36";

describe("Task36", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Task36 />);
    expect(wrapper).toMatchSnapshot();
  });
});
