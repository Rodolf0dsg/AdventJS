function getGiftsToRefill(a1, a2, a3) {
    let ans = [];
    let testObject = new Set([...a1, ...a2, ...a3]);
    for (let item of testObject.keys()) {
        if (!a1.includes(item)) {
            if (!a2.includes(item) || !a3.includes(item)) {
                ans.push(item);
                continue;
            }
        }
        if (!a2.includes(item)) {
            if (!a1.includes(item) || !a3.includes(item)) {
                ans.push(item);
                continue;
            }
        }
        if (!a3.includes(item)) {
            if (!a1.includes(item) || !a2.includes(item)) {
                ans.push(item);
                continue;
            }
        }
    }
    return ans;
}
