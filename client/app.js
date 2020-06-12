 $.ajax({
    url: "/api/chirps",
    type: "POST",
    data: {
        user: "test",
        text: "testText"
    }
}).then(data => {
    console.log(data);
})

$.ajax({
    url: "/api/chirps",
    type: "GET"
}).then(data => {
    console.log(data);
})

$.ajax({
    url: "/api/chirps/id",
    type: "DELETE",
}).then(data => {
    console.log(data);
})

$.ajax({
    url: "/api/chirps/id",
    type: "PUT",
    data: {
        user: '',
        text: '',
    },
}).then(data => {
    console.log(data);
})