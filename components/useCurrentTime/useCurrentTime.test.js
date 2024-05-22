import React from "react";
import { shallow } from "enzyme";
import UseCurrentTime from "./useCurrentTime";

describe("UseCurrentTime", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UseCurrentTime />);
    expect(wrapper).toMatchSnapshot();
  });
});
