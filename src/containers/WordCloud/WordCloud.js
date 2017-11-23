/*  @flow */
import React, { Component } from "react";
import cloud from "d3-cloud";

// Statics
import data from "../../config/data/topics.json";
import { graphSizeFactor } from "../../config/static";

// Helpers
import styleCalculator from "../../helpers/styleCalculator";
import getRange from "../../helpers/utils/getRange";

// Types
import type { State, Dimension } from "../../config/types";

// Components
import Cloud from "../../components/Cloud/Cloud/Cloud";
import Metadata from "../../components/Metadata/Metadata/Metadata";

/**
 * Container Components WordCloud with State
 */
class WordCloud extends Component {
    constructor (props) {
        super(props);
        this.state = this.getInitialState();
    }

    /**
     * Get initial state for the wordcloud
     */
    getInitialState = (): State => ({
        wordList: [],
        selectedWordId: "",
        dimensions: styleCalculator.windowSize()
    });

    /**
     * LifeCycle hooks
     */
    componentWillMount = () => {
        this.updateCloud();
    };
    componentDidMount = (): void => window.addEventListener("resize", this.updateDimensions);
    componentWillUnmount = (): void => window.removeEventListener("resize", this.updateDimensions);

    /**
     *
     * @return {Promise.<void>}
     */
    async updateCloud (): Promise<void> {
        const wordList = data.topics;
        const popularityRange = getRange(wordList.map((word): number => word.volume));
        cloud()
            .size([styleCalculator.windowSize().width, styleCalculator.windowSize().height])
            .words(wordList.map((word): Object => {
                return {
                    text: word.label,
                    size: styleCalculator.getTopicSize(word.volume, popularityRange),
                    color: styleCalculator.getTopicColor(word.sentimentScore), ...word
                };
            }))
            .padding(5)
            .rotate((): number => styleCalculator.rotation())
            .random((): number => 0.5)
            .font("Impact, sans-serif")
            .fontSize((word): number => word.size)
            .on("end", (wordList): void => this.setState({ wordList }))
            .start();
    }

    /**
     * @param wordId
     * setting state on word item click
     * to the selected word
     * this button is the button
     * from cloud to Metadata
     */
    onWordItemClick = (wordId: string) => {
        const currentSize: Dimension = styleCalculator.windowSize(graphSizeFactor);
        this.setState({
            selectedWordId: wordId,
            dimensions: Object.assign(...this.state.dimensions, currentSize)
        });
    };

    /**
     * @param wordId
     * setting state on word label click
     * this button is the back button
     * from Metadata to the cloud
     */
    onBackButtonClick = () => {
        const currentSize: Dimension = styleCalculator.windowSize();
        this.setState({
            selectedWordId: "",
            dimensions: Object.assign(...this.state.dimensions, currentSize)
        });
    };

    /**
     * set state on window resize to adjust the graph size
     */
    updateDimensions = () => {
        const currentSize: Dimension = this.state.selectedWordId ?
            styleCalculator.windowSize(graphSizeFactor) : styleCalculator.windowSize();
        this.setState({ dimensions: Object.assign(...this.state.dimensions, currentSize) });
    };

    render (): Element {
        // get word list from state
        const wordList = this.state.wordList || [];

        // Conditional rendering based on the state of selected Item in state
        return this.state.selectedWordId ?
            <Metadata wordData={wordList.find((wordItem): Object<*> =>
                wordItem.id === this.state.selectedWordId)}
            dimensions={this.state.dimensions}
            onBackButtonClick={this.onBackButtonClick}/> :
            <Cloud
                dimensions={this.state.dimensions}
                wordList={wordList}
                onWordItemClick={this.onWordItemClick}/>;
    }
}

export default WordCloud;
