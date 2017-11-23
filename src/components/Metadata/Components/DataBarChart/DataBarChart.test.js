/* eslint-disable no-undef */
import React from "react";
import styleCalculator from "../../../../helpers/styleCalculator";
import DataBarChart from "./DataBarChart";
import { shallowToJson } from "enzyme-to-json";
import getChartData from "../../../../helpers/utils/getChartData";
import data from "../../../../config/data/topics.json";

test("render DataBarChart()", () => {
    const dimensions = styleCalculator.windowSize();

    const wordData = data.topics.find((wordItem): Object<*> =>
        wordItem.id === "1751295897__Berlin");

    const wrapper = shallow(
        <DataBarChart data={getChartData(wordData.pageType)}
            dimensions={dimensions} label={{ x: "Channel", y: "Hits" }}/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
