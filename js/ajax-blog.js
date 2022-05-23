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
        rowData += `<div className="card text-center">`;
        rowData += `<div className="card-header">Blog #${blogCounter}</div> `;
        rowData += `<div className="card-body">`;
        rowData += `<h5 className="card-title">${blogObject.title}</h5>`;
        rowData += ` <p className="card-text">${blogObject.content}</p>`;
        rowData += `<a href="#" className="btn btn-primary">${blogObject.categories}</a>`;
        rowData += `</div>`;
        rowData += `<div className="card-footer text-muted"> ${blogObject.date} </div> `;
        rowData += `</div>`;
        rowData += `<hr>`;
        blogDisplay.innerHTML += rowData;
    }


    // end jquery
});
