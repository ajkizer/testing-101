const sumOfIntegersInString = (string) => {
    return string
        .replace(/\D/g,' ')
        .split(" ")
        .filter(Boolean)
        .reduce((a,b) => a * 1 + b * 1, 0)
}


module.exports  = sumOfIntegersInString