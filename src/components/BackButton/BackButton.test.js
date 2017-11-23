/* eslint-disable no-undef */
import React from "react";
import { shallowToJson } from "enzyme-to-json";
import BackButton from "./BackButton";

test("render BackButton()", () => {
    const onButtonClick = () => {};
    const wrapper = shallow(
        <BackButton
            onButtonClick={onButtonClick}
        />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
