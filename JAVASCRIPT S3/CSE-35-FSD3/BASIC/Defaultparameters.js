//default parameters
function add(a, b = 5) {
    return a + b;
}

//call back function
function display (result){
    console.log(result)
}
function call(a, b, callback) {
    let result = a + b;
    callback(result);
}
call(10, 20, display);