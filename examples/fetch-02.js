
fetch('https://jsonplaceholder.typicode.com/photos')
.then(function (response) {
    const reader = response.body.getReader();
    return reader.read().then((data) => {
        return data;
    })
    // reader.releaseLock();
})
.then(function (data) {
    console.log(data);
});