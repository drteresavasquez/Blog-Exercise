"use strict";
console.log("add entry, Yo!");

$("#add_blog").on("click", function() {
    event.preventDefault();

$("#blogListView").addClass("hidden");

 $("#addBlogView").addClass("visible");
 $("#addBlogView").removeClass("hidden");

});