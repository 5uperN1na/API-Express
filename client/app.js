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
            <button onclick="editChirp ('${customer.id}', '${customer.firstname}', '${customer.comment}')" id="editChirp" type="button" class="btn btn-default">Edit</button>
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


function editChirp(id, firstname, comment) {

    console.log(id);
    console.log({ firstname, comment });

    Swal.fire({
        title: 'Edit chirp' + id,
        input: 'text',
        inputValue: comment,
        showCancelButton: true,
        confirmButtonText: 'Save Changes',
        showLoaderOnConfirm: true,
        preConfirm: (editedMessage) => {
            console.log(editedMessage);
            $.ajax({
                url: `/api/chirps/${id}`,
                type: "PUT",
                data: {
                    firstname,
                    comment: editedMessage
                }

            }).then((resp) => {
                getChirps();
                return resp;

            })
        },
        allowOutsideClick: () => !Swal.isLoading()
    });


}








