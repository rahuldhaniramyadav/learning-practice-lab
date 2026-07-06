console.log("This is APP Require JS ");

function calculateSum(a, b) {
    return a+b;
}

const x = "access x in another module"; 

// module.exports = calculateSum;
module.exports = { calculateSum };
module.exports = { x, calculateSum };