import React from "react";
import type { Element, Children } from "react";

type WordListItemType = {
    id: string,
    x: number,
    y: number,
    fontSize: number,
    fontFamily: string,
    children: Children,
    color: string,
    onWordItemClick: Function,
    rotate: number,
    textAnchor: string
};

/**
 *
 * @param id
 * @param x
 * @param y
 * @param fontSize
 * @param color
 * @param fontFamily
 * @param children
 * @param rotate
 * @param textAnchor
 * @param onWordItemClick
 * @return {Element}
 * @constructor
 */
const WordListItem =
    ({
        id, x, y, fontSize, color, fontFamily, children,
        rotate = 0, textAnchor = "middle", onWordItemClick
    }: WordListItemType): Element<any> => {
        return (
            <text
                className="c-text"
                style={{ fontSize, fontFamily, fill: color, cursor: "pointer" }}
                transform={`translate(${x}, ${y}) rotate(${rotate})`}
                textAnchor={textAnchor}
                onClick={(): void => onWordItemClick(id)}>
                {children}
            </text>
        );
    };

export default WordListItem;
