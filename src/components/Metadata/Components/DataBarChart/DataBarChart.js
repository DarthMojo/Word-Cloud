import React from "react";
import type { Element } from "react";
import { BarChart } from "react-easy-chart";
import { minWindowWidth, chartSizeFactor, chartMargin } from "../../../../config/static";

import "./DataBarChart.css";

type DataBarChartType = {
    data: Array<Object>;
    dimensions: Object;
    chartTitle: string
};

/**
 *
 * @param data
 * @param dimensions
 * @param chartTitle
 * @return {Element}
 * @constructor
 */
const DataBarChart = ({ data, dimensions, chartTitle }: DataBarChartType): Element<any> => {
    return (<div>
        <div className={"ChartTitle"}>{chartTitle}</div>
        <BarChart
            axes={(dimensions.width) > minWindowWidth}
            colorBars
            grid
            height={dimensions.height * chartSizeFactor}
            width={dimensions.width}
            data={data}
            yTickNumber={5}
            margin={chartMargin}
        /></div>);
};
export default DataBarChart;
