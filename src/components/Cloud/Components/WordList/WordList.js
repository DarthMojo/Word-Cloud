import React, { Component } from "react";
import type { Element } from "react";
import WordListItem from "../WordListItem/WordListItem";

type WordListType = {
    wordList: Array<Object>;
    onWordItemClick: Function
};


/**
 *
 * @param wordList
 * @param onWordItemClick
 * @return Element
 */

const WordList = ({ wordList, onWordItemClick }: WordListType): Element<any> =>
    wordList.map((wordItem): Component =>
        (<WordListItem
            key={wordItem.id}
            id={wordItem.id}
            fontSize={wordItem.size}
            color={wordItem.color}
            fontFamily={wordItem.font}
            rotate={wordItem.rotate}
            x={wordItem.x}
            y={wordItem.y}
            onWordItemClick={onWordItemClick}>
            {wordItem.label}
        </WordListItem>));

export default WordList;
