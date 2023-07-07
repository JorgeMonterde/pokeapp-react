import React from "react";
import { shallow } from "enzyme";
import HamburgerMenu from "./HamburgerMenu";

describe("Menu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HamburgerMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
