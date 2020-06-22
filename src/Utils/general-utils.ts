/**
 * Returns a number between 0 and end (inclusives).
 * @param end
 */
export const getRandom: GetRandomFn = end => Math.round(Math.random() * end);
