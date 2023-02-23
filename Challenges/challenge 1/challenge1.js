function wrapping(gifts) {
    return [...gifts.map(e => {
        const tapa = "*".repeat(e.length + 2)
        return `${tapa}\n*${e}*\n${tapa}`
    })]
}
