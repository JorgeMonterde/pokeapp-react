import React from "react";
import { shallow } from "enzyme";
import NewPokemonForm from "./NewPokemonForm";

describe("NewPokemonForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewPokemonForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
