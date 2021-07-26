const { func } = require("assert-plus");

function area(radius) {
    let area = Math.pow(radius, 2) * 3.14;
    return area;
};

function circumference(radius) {
    return radius * 2 * Math.PI;
}


module.exports = {
    area, 
    circumference
}

//object shorthand for key and value are the same 