/* eslint-disable no-undef */
import React from "react";
import data from "../../../../config/data/topics.json";
import { shallowToJson } from "enzyme-to-json";
import WordList from "./WordList";


test("render WordList()", () => {
    const onWordItemClick = () => {};

    const wrapper = shallow(
        <WordList
            wordList={data.topics}
            onWordItemClick={onWordItemClick}
        />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
