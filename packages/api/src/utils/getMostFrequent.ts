const getMostFrequent = (arr: Array<string>): string[] => {
    const hashmap = arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {});
    return Object.keys(hashmap).filter(x => {
        return hashmap[x] == Math.max.apply(null,
            Object.values(hashmap))
    })
}

export default getMostFrequent;