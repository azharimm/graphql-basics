const add = (a, b) => {
    return `${a} + ${b} = `+ (a + b);
}

const substract = (a, b) => {
    return `${a} - ${b} = `+ (a - b);
}

export { add as default, substract };