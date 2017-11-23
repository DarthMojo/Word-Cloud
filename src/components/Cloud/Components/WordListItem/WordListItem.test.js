import React from "react";
import data from "../../../../config/data/topics.json";
import WordListItem from "./WordListItem";
import { shallowToJson } from "enzyme-to-json";

test("render WordListItem()", async () => {
    const onWordItemClick = () => {};

    const wordItem = await data.topics.find(wordItem => wordItem.id === "1751295897__Berlin");

    const wrapper = shallow(
        <WordListItem
            id={wordItem.id}
            x={98}
            y={175}
            fontSize={17}
            color={"#49E20E"}
            fontFamily={"Impact, sans-serif"}
            rotate={90}
            textAnchor={"middle"}
            onWordItemClick={onWordItemClick}
            children={wordItem.label} />
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
});
