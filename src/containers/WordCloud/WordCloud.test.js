import React from "react";
import { shallow } from "enzyme";
import WordCloud from "./WordCloud";

test("render WordCloud()", () => {
    const wrapper = shallow(
        <WordCloud />
    );
    expect(wrapper).toMatchSnapshot();
    /*const log = jest.fn();
    global.console = {log}
    wrapper.props('onWordItemClick')(); //just find the dismiss prop and call the function
    expect(log).toHaveBeenCalledWith('test');*/
});
