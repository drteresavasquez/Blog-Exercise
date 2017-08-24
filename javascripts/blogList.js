"use strict";
console.log("blog list, yo!");

$("#blog_list").on("click", function() {
    event.preventDefault();
    $("#addBlogView").addClass("hidden");

    $("#blogListView").addClass("visible");
    $("#blogListView").removeClass("hidden");

});