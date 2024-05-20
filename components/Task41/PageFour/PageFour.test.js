import React from "react";
import { shallow } from "enzyme";
import PageFour from "./PageFour";

describe("PageFour", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PageFour />);
    expect(wrapper).toMatchSnapshot();
  });
});
