/**
 * 1. Each topic should have one of 6 different text sizes,
 * with the most popular topics largest, and least popular smallest
 *
 * 2.A topic with a sentiment score > 60 should be displayed in green
 *
 * 3.A topic with a sentiment score < 40 should be displayed in red
 *
 * 4.Other topics should be displayed in grey
 */
import type Dimension from "../config/types";
import { sentimentScoreMin,
    sentimentScoreMax,
    defaultColor,
    size } from "../config/static";


/**
 *
 * @type {{getTopicSize: (function(*, *)),
 * getTopicColor: (function(*)),
 * windowSize: (function(*=)),
 * rotation: (function(): number)}}
 */
const styleCalculator = {
    /**
     *
     * @param wordPopularity
     * @param popularityRange
     * @return {number}
     */
    getTopicSize: (wordPopularity, popularityRange): number => {
        const unitRange = ((popularityRange.max - popularityRange.min) / size.max) || 0;
        const sizeValue: number = Array.from({ length: size.max }, (v, k): number => k + 1)
            .find((sizeIndex: number): number =>
                wordPopularity <= popularityRange.min + (sizeIndex * unitRange));
        return Math.round((sizeValue / size.max) * 100);
    },
    /**
     *
     * @param sentimentScore
     * @return String
     */
    getTopicColor: (sentimentScore): string => {
        if (sentimentScore > sentimentScoreMax.score) {
            return sentimentScoreMax.color;
        } else if (sentimentScore < sentimentScoreMin.score) {
            return sentimentScoreMin.color;
        }
        return defaultColor;
    },
    /**
     *
     * @param factor
     * @return {{width: number, height: number}}
     */
    windowSize: (factor = 1): Dimension => {
        return {
            width: Math.round(window.innerWidth * factor),
            height: Math.round(window.innerHeight * factor)
        };
    },
    /**
     *@return {number}
     */
    rotation: (): number => (~~(Math.random() * size.max) - size.max * 0.5) * 30
};
export default styleCalculator;
