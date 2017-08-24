"use strict";
console.log("formEntry.js, Yo!");

let submittedBlog = {};

$("#submit").on("click", function(){
    submittedBlog.title = $("#title").val();
    submittedBlog.author = $("#author").val();
    submittedBlog.datepicker = $("#datepicker").val();
    submittedBlog.keywords = $("#keywords").val();
    submittedBlog.blogEntry = $("#blog-entry").val();
    $("#title").val("");
    $("#author").val("");
    $("#keywords").val("");
    $("#blog-entry").val("");
    $("#datepicker").val("");
    $(".containerBlogList").append(`
    <div>
    <h3>Title: ${submittedBlog.title}</h3>
    <p>Author: ${submittedBlog.author}</p>
    <p>${submittedBlog.blogEntry}</p>
    <button class="delBtn">DELETE</button>
    </div>
    `);
    $(".delBtn").on("click", function(){
        $(this).parent().remove();
    });
});
