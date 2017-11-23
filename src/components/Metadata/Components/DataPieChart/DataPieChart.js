import React from "react";
import type { Element } from "react";
import { PieChart } from "react-easy-chart";
import { chartSizeFactor, chartMargin } from "../../../../config/static";
import "./DataPieChart.css";

type DataPieChartType = {
    data: Array<Object>;
    dimensions: Object;
    chartTitle: string
};

/**
 *
 * @param dimensions
 * @param data
 * @param chartTitle
 * @return {Element}
 * @constructor
 */
const DataPieChart = ({ dimensions, data, chartTitle }: DataPieChartType): Element<any> => {
    const processedData = data.map((value, index) =>
        ({ key: value.x, value: value.y }));
    return (<div className={"PieChart"}>
        <div className={"ChartTitle"}>{chartTitle}</div>
        <PieChart
            size={(dimensions.height * chartSizeFactor)}
            innerHoleSize={(dimensions.height * chartSizeFactor) / 2}
            data={processedData}
            labels
            margin={chartMargin}
        />
    </div>);
};

export default DataPieChart;
