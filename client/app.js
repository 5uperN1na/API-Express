function getChirps() {
    $.ajax({
        url: "/api/chirps/",
        type: "GET",

    }).then(data => {
        console.log(data);
        $('.list-group').empty();
        data.forEach(customer => {
            $('.list-group').append(`
            <li class="list-group-item">${customer.firstname}: ${customer.comment} 
            <button onclick="deleteChirp(${customer.id})" id="deleteChirp" type="button" class="btn btn-default">X</button>
            
            </li>
            `)

        });
    })


}

function postChirp(firstname_new, comment_new){
    $.ajax({
        url: "/api/chirps/",
        type: "POST",
        data: {
            firstname: firstname_new,
            comment: comment_new
        }
    }).then(()=> {
        $('#comment').val('');
       $('#firstname').val('');
        getChirps();
    })
}

getChirps();

$("#postChirp").click((e) =>{
    e.preventDefault();
    let newComment = $('#comment').val();
    let newFirstName = $('#firstname').val();
    postChirp(newFirstName, newComment);

})


function deleteChirp(id){
    $.ajax({
        url: `/api/chirps/${id}`,
        type: "DELETE",

    }).then(() =>{
        getChirps();

    })

}








    // $.ajax({
    //     url: "/api/chirps/id",
    //     type: "PUT",
    //     data: {
    //         user: '',
    //         text: '',
    //     },
    // }).then(data => {
    //     console.log(data);
    // })


































// // const { response } = require("express");

// // $.ajax({
// //     url: "/api/chirps/id",
// //     type: "PUT",
// //     data: {
// //         user: '',
// //         text: '',
// //     },
// // }).then(data => {
// //     console.log(data);
// // })

// $(document).ready(function () {




//     // GET REQUEST
//     $("#allChirps").click(function (event) {
//         event.preventDefault();
//         ajaxGet();
//     });

//     // DO GET
//     function ajaxGet() {

//         $.ajax({
//             url: "/api/chirps",
//             type: "GET",
//             // }).then(data => {
//             //console.log(data);
//             success: function (result) {
//                 $('#getResultDiv ul').empty();
//                 let custList = "";
//                 $.each(result, function (id, customer) {
//                     $('#getResultDiv .list-group').append(customer.firstname + " " + customer.comment + "<br>")
//                     .click(function (id, customer) {
//                                 ajaxDelete();
//                             });




//                 });
//                 console.log("Success: ", result);
//             },
//             error: function (e) {
//                 $("#getResultDiv").html("<strong>Error</strong>");
//                 console.log("ERROR: ", e);
//             }
//         });

//     }


//     // Delete
//     $("#deleteChirp").click(function (event) {
//         event.preventDefault();
//         ajaxDelete();
//     });



//     function ajaxDelete() {

//         $.ajax({
//             url: "/api/chirps/id",
//             type: "DELETE",
//         }).then(data => {
//             console.log(data);
//         })

//     }



//     // SUBMIT FORM
//     $("#chirpForm").submit(function (event) {
//         // Prevent the form from submitting via the browser.
//         event.preventDefault();
//         ajaxPost();
//     });


//     function ajaxPost() {

//         // PREPARE FORM DATA
//         let formData = {
//             firstname: $("#firstname").val(),
//             comment: $("#comment").val()
//         }



//         // $.ajax({
//         //     url: "/api/chirps",
//         //     type: "POST",
//         //     data: JSON.stringify(formData),
//         //     dataType: 'json',
//         // }).then(data => {
//         //     console.log(data);
//         // })


//         // DO POST
//         $.ajax({
//             type: "POST",
//             contentType: "application/json",
//             url: "/api/chirps",
//             data: JSON.stringify(formData),
//             dataType: 'json',
//             success: function (customer) {
//                 $("#postResultDiv").html("<p>" +
//                     "Post Successfully! <br>" +
//                     "--->" + JSON.stringify(customer) + "</p>");
//             },
//             error: function (e) {
//                 alert("Error!")
//                 console.log("ERROR: ", e);
//             }
//         });

//         // Reset FormData after Posting
//         resetData();

//     }

//     function resetData() {
//         $("#firstname").val("");
//         $("#comment").val("");
//     }

// })