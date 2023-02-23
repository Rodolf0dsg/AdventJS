distributeGifts = (packOfGifts, reindeers) => {
    return ~~((reindeers.join('').length * 2)/packOfGifts.join('').length);
};
