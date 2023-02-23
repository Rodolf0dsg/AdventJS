function selectSleigh(distance, sleighs) {
      let ans = sleighs.filter((element) => {
        return element.consumption * distance <= 20
    })
    if (ans.length == 0) {
        return null;
    } else {
        return ans[ans.length - 1].name
    }
}
