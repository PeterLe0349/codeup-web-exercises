"use strict";
$(document).ready(function(){
    let blogCounter = 0;
    let blogDisplay = document.getElementById('blogsContainer');
    let blogData;

    $.ajax({
        url: "../data/blog.json",
        type: "GET",
        data: "{}",
        // async: false,
        dataType: "json"
    }).done(function(data) {
        blogData = data;
        for(let blog of data){
            console.log(blog);
            makeBlog(blog);
        }
    });

    // for(let blog of blogData){
    //         makeBlog(blog);
    //     }

    function makeBlog(blogObject){
        let rowData = '';
        blogCounter++;
        rowData += `<div class="col-6"><div class="card text-center">`;
        rowData += `<div class="card-header postTitle">Blog #${blogCounter}</div> `;
        rowData += `<div class="card-footer postDate"> ${blogObject.date} </div> `;
        rowData += `<div class="card-body bg-light">`;
        rowData += `<h5 class="card-title">${blogObject.title}</h5>`;
        rowData += ` <p class="card-text bg-light">${blogObject.content}</p>`;
        rowData += `<a href="#" class="btn btn-primary">${blogObject.categories}</a>`;
        rowData += `</div>`;
        rowData += `</div>`;
        rowData += `</div>`;
        blogDisplay.innerHTML += rowData;
    }


    // end jquery
});
