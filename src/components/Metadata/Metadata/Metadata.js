import React from "react";
import type { Element } from "react";
import getChartData from "../../../helpers/utils/getChartData";
import {
    pageTypeTitle,
    sentimentScoreTitle,
    popularityOverTimeTitle } from "../../../config/static";
import DataBarChart from "../Components/DataBarChart/DataBarChart";
import DataPieChart from "../Components/DataPieChart/DataPieChart";
import WordLabel from "../Components/WordLabel/WordLabel";
import BackButton from "../../BackButton/BackButton";

import "./Metadata.css";

type MetadataType = {
    wordData: Object,
    dimensions: Object,
    onBackButtonClick: Function
};

/**
 *
 * @param wordData
 * @param dimensions
 * @param onBackButtonClick
 * @return {Element}
 * @constructor
 */
const Metadata = ({ wordData, dimensions, onBackButtonClick }: MetadataType): Element<any> => {
    return (<div>
        <BackButton onButtonClick={onBackButtonClick} />
        <div className={"Metadata"}>
            <div className={"Metadata-Child"}>
                <WordLabel
                    wordColor={wordData.color}
                    wordLabel={wordData.label}
                    dimensions={dimensions}/>
                <DataPieChart
                    data={getChartData(wordData.sentiment)}
                    dimensions={dimensions}
                    chartTitle={sentimentScoreTitle}/>
            </div>
            <div className={"Metadata-Child"}>
                <DataBarChart
                    data={getChartData(wordData.pageType)}
                    dimensions={dimensions}
                    chartTitle={pageTypeTitle}/>
                <DataBarChart
                    data={wordData.days.map((day): Object => ({
                        x: new Date(day.date).toDateString(),
                        y: day.volume
                    }))}
                    dimensions={dimensions}
                    chartTitle={popularityOverTimeTitle}/>
            </div>
        </div>
    </div>
    );
};

export default Metadata;
