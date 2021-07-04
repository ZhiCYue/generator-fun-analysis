fetch('https://jsonplaceholder.typicode.com/photos')
.then(function (response) {
    return response.json();
})
.then(function (myJson) {
    console.log(myJson);
});
