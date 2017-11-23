import React from "react";
import type { Element } from "react";
import WordList from "../Components/WordList/WordList";

type CloudType = {
    dimensions: Object;
    wordList: Array<Object>;
    onWordItemClick: Function
};

/**
 *
 * @param dimensions
 * @param wordList
 * @param onWordItemClick
 * @return {Element}
 * @constructor
 */
const Cloud = ({ dimensions, wordList, onWordItemClick }: CloudType): Element<any> => {
    return (
        <svg
            width={dimensions.width}
            height={dimensions.height}>
            <g transform={`translate(${dimensions.width / 2}, ${dimensions.height / 2})`}>
                <WordList
                    wordList={wordList}
                    onWordItemClick={onWordItemClick} />
            </g>
        </svg>
    );
};

export default Cloud;
