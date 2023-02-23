function getOptimalPath(path) {
      return path.reverse().reduce((total, value, index, array) => {
        return value.map((item, index1) => {
            return item + Math.min(total[index1], total[index1 + 1])
        })
    })[0]
}
