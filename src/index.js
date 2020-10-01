exports.min = function min(array) {
    if (!array) return 0;

    let minNum = array[0];
    array.forEach((num) => {
        minNum = minNum < num ? minNum : num;
    });

    return minNum || 0;
};

exports.max = function max(array) {
    if (!array) return 0;

    let maxNum = array[0];
    array.forEach((num) => {
        maxNum = maxNum > num ? maxNum : num;
    });
    return maxNum || 0;
};

exports.avg = function avg(array) {
    if (!array) return 0;

    return array.reduce((sum, num) => sum + num, 0) / array.length || 0;
};
