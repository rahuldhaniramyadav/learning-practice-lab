console.log("This is APP Require JS ");

export function calculateSum(a, b) {
    return a+b;
}

export const x = "access x in another module"; 

// module.exports = calculateSum;
// module.exports = { calculateSum };
// module.exports = { x, calculateSum };