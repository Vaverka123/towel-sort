// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix) {
        result = matrix
            .map((el, i) => {
                if (i % 2 !== 0) {
                    return el.reverse();
                }
                return el;
            })
            .flat();
    }
    return result;
};
