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
            <button onclick="deleteChirp(${customer.id})" id="deleteChirp" type="button" class="btn btn-default">Delete</button>
            <button onclick="editChirp(${customer.id})" id="editChirp" type="button" class="btn btn-default">Edit</button>
            </li>
            `)

        });
    })


}

function postChirp(firstname_new, comment_new) {
    $.ajax({
        url: "/api/chirps/",
        type: "POST",
        data: {
            firstname: firstname_new,
            comment: comment_new
        }
    }).then(() => {
        $('#comment').val('');
        $('#firstname').val('');
        getChirps();
    })
}

getChirps();

//event listener submit button from /client/index.html and call to .ajax post chirp function

$("#postChirp").click((e) => {
    e.preventDefault();
    let newComment = $('#comment').val();
    let newFirstName = $('#firstname').val();
    postChirp(newFirstName, newComment);

})

//.ajax delete function with call to get updated chirp list

function deleteChirp(id) {
    $.ajax({
        url: `/api/chirps/${id}`,
        type: "DELETE",

    }).then(() => {
        getChirps();

    })

}

//.ajax edit function with call to get updated chirp list

function editChirp(id) {

    swal({
        title: "Update!",
        text: "Edit the chirp below.",
        content: "input",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Chirp updated!",
        closeOnConfirm: false
    })

    $.ajax({
        url: `/api/chirps/${id}`,
        type: "PUT",

    }).then(() => {
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