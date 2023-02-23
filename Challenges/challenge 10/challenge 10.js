function checkJump(heights) {
    const max = Math.max(...heights);
    const maxFind = heights.indexOf(max);
    let minorHalf = heights.slice(0, maxFind + 1)
    let biggerHalf = heights.slice(maxFind, heights.length)
    let minorHalfCheck = minorHalf.every((value, index, array) => index == array.length - 1 ? value > array[array.length - 2] : value <= array[index + 1]);
    let biggerHalfCheck = biggerHalf.every((value, index, array) => index == array.length-1 ? value <= array[array.length - 2] : value >= array[index + 1]);
    return minorHalfCheck && biggerHalfCheck;
}
