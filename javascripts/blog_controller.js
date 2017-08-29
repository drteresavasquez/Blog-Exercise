"use strict";
console.log("blog controller, yo!");

var firebaseCall = require("./blog_factory.js");

firebaseCall.getBlogPosts()
.then((data)=>{
    console.log(data);
    displayOnDOM(data);
});
    
    
    
function displayOnDOM(blogPosts){
    for (let i = 0; i < blogPosts.length; i++){
        let post = blogPosts[i];
        $(".containerBlogList").append(`
        <div>
        <h3>Title: ${post.title}</h3>
        <p>Author: ${post.author}</p>
        <p>${post.copy}</p>
        <button class="delBtn">DELETE</button>
        </div>
        `);
    }
    $(".delBtn").on("click", function(){
        $(this).parent().remove();
    });
}