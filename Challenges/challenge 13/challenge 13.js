function getFilesToBackup(lastBackup, changes) {
    let ans = [];
    let x = changes.filter((element) => {
        return element[1] > lastBackup
    })
    let onlyId = new Set(x.map(element => element[0]).sort((a, b) => a - b))
    onlyId.forEach(value => ans.push(value))
    return ans;
    }
