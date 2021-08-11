
exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let min = Infinity;
    for (let i = 0; i < array.length; i = i + 1) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let max = -Infinity;
    for (let i = 0; i < array.length; i = i + 1) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let sum = array.reduce((a, b) => a + b, 0);

    return sum / array.length;
}
