 const getDecimalPart = (number?: number): number => {
    if (!number) return;
    if (Number.isInteger(number))
        return 0;

    const decimalStr = number.toString().split('.')[1];
    return Number(decimalStr);
};

export default getDecimalPart;
