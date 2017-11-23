/**
 *
 * @param popularityValues
 */
const getRange = (popularityValues) => ({
    max: Math.max(...popularityValues),
    min: Math.min(...popularityValues)
});
export default getRange;
