function decorateTree(base) {
    let combinations = {
        'B P': ' R', 'P B': ' R',
        'R P': ' B', 'P R': ' B',
        'B R': ' P', 'R B': ' P',
        'P P': ' P',
        'B B': ' B',
        'R R': ' R',
    }
    let ans = [];
    ans.push(base);

    for (let i = 0; i < (base.split(' ').length); i++) {
        let elements = ans[i].split(' ');
        let stringToPush = ``;
        for (let j = 0; j < elements.length - 1; j++) {
            const elementToPush = `${elements[j]} ${elements[j + 1]}`
            stringToPush += `${combinations[elementToPush]}`;
            if (j == (elements.length) - 2) {
                ans.push(stringToPush.substring(1, stringToPush.length))
            } else {
                continue;
            }
        }
    }
    return ans.reverse();
}
