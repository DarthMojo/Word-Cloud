import React from "react";
import type { Element } from "react";

import "./WordLabel.css";

type WordLabelType = {
    wordColor: string;
    wordLabel: string;
    dimensions: Object;
};

/**
 *
 * @param wordColor
 * @param wordLabel
 * @param dimensions
 * @param onWordLabelClick
 * @return Element
 */
const WordLabel = ({ wordColor, wordLabel, dimensions }: WordLabelType): Element<any> => (
    <div className="WordLabel"
        style={{ height: dimensions.height * 0.5, width: dimensions.width }}>
        <div
            style={{ color: wordColor }}
        > {wordLabel}
        </div>
    </div>);

export default WordLabel;
