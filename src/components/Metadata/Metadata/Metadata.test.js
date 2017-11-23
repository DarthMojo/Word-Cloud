/* eslint-disable no-undef */
import React from "react";
import Metadata from "./Metadata";
import data from "../../../config/data/topics.json";
import { shallowToJson } from "enzyme-to-json";
import styleCalculator from "../../../helpers/styleCalculator";

test("render Metadata()", () => {
    const dimensions = styleCalculator.windowSize();

    const onButtonClick = () => {};

    const wrapper = shallow(
        <Metadata
            dimensions={dimensions}
            wordData={data.topics.find((wordItem): Object<*> =>
                wordItem.id === "1751295897__Berlin")}
            onBackButtonClick={onButtonClick}
        />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
