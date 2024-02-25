function logResponseBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    // console.log(result.status);
    result.json().then(logResponseBody);
}

var sendobj = {
    method: "GET"
}; 


fetch("http://localhost:3000/handleSum?counter=10",sendobj).then(callbackFn);