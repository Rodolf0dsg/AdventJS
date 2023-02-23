function checkPart(part) {
      function deepCheck(string) {
        for (let i = 0; i < string.length; i++) {
            let check = string.split('');
            check.splice(i, 1);
            let check2 = check.join('');
            if (check2 == check2.split('').reverse().join('')) {
                return true;
            } else if (i == string.length) {
                return false;
            }
        }
    };
    if (part == part.split('').reverse().join('')) {
        return true;
    } else if (deepCheck(part)) {
        return true;
    } else {
        return false;
    }
}
