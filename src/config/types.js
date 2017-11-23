/**
 * Custom Type definition for flow
 */
export type Dimension = {
    width: number;
    height: number
}

export type State = {
    wordList: Array<*>,
    selectedWordId: string,
    dimensions: Dimension
};
