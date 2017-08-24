"use strict";
console.log("JSON call, yo!");

var newBlogObj = {};

let blogPostRequest = new XMLHttpRequest();

blogPostRequest.addEventListener("load", blogPostComplete);
blogPostRequest.addEventListener("error", blogPostFailed);

function blogPostComplete(event){
	console.log("event", event);
	if (event.target.status === 200) {
	console.log("THE BIG data has loaded");
	let blogPosts = JSON.parse(event.target.responseText);
    console.log("blogPosts", blogPosts);
    displayOnDOM(blogPosts);
	}else {
		console.log("Check the spelling of your file");
	}
}

function blogPostFailed(event){
	console.log("oops the data failed");
}

blogPostRequest.open("GET", "javascripts/blogPosts.json");
blogPostRequest.send();

function displayOnDOM(blogPosts){
    // console.log("displayOnDOM", blogPosts.length);
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
        
        // newBlogObj.title = post.title;
        // newBlogObj.author = post.author;
        // newBlogObj.copy = post.copy;
        // console.log("newBlogObj", newBlogObj);
    }
    $(".delBtn").on("click", function(){
        $(this).parent().remove();
    });
    // console.log("newBlogObj.length", newBlogObj.length);
    // for (let i = 0; i < newBlogObj.length; i++){
    // console.log("newBlogObj.length", newBlogObj.length);
   

// $(".delBtn").on("click", function(){
//         $(this).parent().remove();
//     });
}


     