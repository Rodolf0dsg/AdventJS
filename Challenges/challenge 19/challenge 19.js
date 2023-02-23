function sortToys(toys, positions) {
  let ans = [];
  let x = Math.min(...positions);
  let newPositions = positions.map(element => element - x);
newPositions.forEach((element, index) => {
    ans[element] = toys[index];
})
  return ans;
}
