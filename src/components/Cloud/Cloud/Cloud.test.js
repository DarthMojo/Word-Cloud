import React from "react";
import Cloud from "./Cloud";
import styleCalculator from "../../../helpers/styleCalculator";
import data from "../../../config/data/topics.json";
import { shallowToJson } from "enzyme-to-json";

test("render Cloud()", () => {
    const dimensions = styleCalculator.windowSize();

    const onWordItemClick = () => {};

    const wrapper = shallow(
        <Cloud
            dimensions={dimensions}
            wordList={data.topics}
            onWordItemClick={onWordItemClick}
        />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
