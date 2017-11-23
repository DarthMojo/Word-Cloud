/**
 *
 * @param values
 * @return {Array}
 */
const getChartData = (values) => {
    const data = [];
    for (const [key, value] of Object.entries(values)) {
        data.push({ x: key, y: value });
    }
    return data;
};
export default getChartData;
