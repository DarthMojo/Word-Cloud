import React from "react";
import DataPieChart from "./DataPieChart";
import getChartData from "../../../../helpers/utils/getChartData";
import data from "../../../../config/data/topics.json";
import { shallowToJson } from "enzyme-to-json";
import styleCalculator from "../../../../helpers/styleCalculator";

test("render DataPieChart()", () => {
    const dimensions = styleCalculator.windowSize();

    const wordData = data.topics.find((wordItem): Object<*> =>
        wordItem.id === "1751295897__Berlin");

    const wrapper = shallow(
        <DataPieChart
            data={getChartData(wordData.sentiment)}
            dimensions={dimensions}/>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
