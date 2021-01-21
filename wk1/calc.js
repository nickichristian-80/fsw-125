// calc.js

// module.exports = function(num) {
//     console.log(num * num)
// };


function squaredFx(num) {
    console.log(num * num);
};

function squaredFx2(num) {
    console.log(num * num);
};

module.exports = {
    squaredFx: squaredFx,
    squaredFx2: squaredFx2,
    whatever: ' whatevr'
} /// has no () b/c everytime in JS we pass around fucntions we dont use () only when we invoke functions do we