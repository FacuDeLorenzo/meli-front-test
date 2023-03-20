const getWholePart = (number: number): number => {
    if (Number.isInteger(number))
        return number;
    const wholeStr = number.toString().split('.')[0];
    return Number(wholeStr);
}

export default getWholePart;