"use strict";
console.log("blog factory, yo!");

let firebaseCall = {
    getBlogPosts: function() {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `https://exercisedb-20924.firebaseio.com/blog-exercise.json`
            }).done((data) => {
                resolve(data);
            });
        });
    }
};
  module.exports = firebaseCall;