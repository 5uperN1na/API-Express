 $.ajax({
    url: "/api/chirps",
    type: "POST",
    data: {
        user: "testName",
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