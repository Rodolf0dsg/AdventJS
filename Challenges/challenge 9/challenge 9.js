function countTime(leds) {
    const splitedArr = leds.join('').split('1');
    splitedArr[0] += splitedArr.at(-1);
    return splitedArr.sort((a,b)=> b.length - a.length)[0].length * 7
  }
