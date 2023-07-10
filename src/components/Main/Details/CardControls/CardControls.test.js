import React from "react";
import { shallow } from "enzyme";
import CardControls from "./CardControls";

describe("CardControls", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardControls />);
    expect(wrapper).toMatchSnapshot();
  });
});
