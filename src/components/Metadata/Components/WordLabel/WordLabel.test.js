import React from "react";
import styleCalculator from "../../../../helpers/styleCalculator";
import WordLabel from "./WordLabel";
import { shallowToJson } from "enzyme-to-json";

test("render WordLabel()", () => {
    const dimensions = styleCalculator.windowSize();

    const wrapper = shallow(
        <WordLabel
            dimensions={dimensions}
            wordColor={"black"}
            wordLabel={"mockLabel"}
        />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
