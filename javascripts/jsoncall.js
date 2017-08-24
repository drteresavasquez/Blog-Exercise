"use strict";
console.log("JSON call, yo!");

function callJSON(){
    return new Promise((resolve, reject) => {
    $.ajax({
        url: "javascipts/jsoncall.js"
    }).done();

    });

}