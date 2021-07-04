// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

async function* streamAsyncIterable(stream) {
    const reader = stream.getReader();
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                return;
            }
            yield value;
        }
    } finally {
        reader.releaseLock();
    }
}

async function getResponseSize(url) {
    const response = await fetch(url);

    let responseSize = 0;

    for await (const chunk of streamAsyncIterable(response.body)) {
        // Incrementing the total response length.
        responseSize += chunk.length;
    }

    console.log(`Response Size: ${responseSize} bytes`);
    // expected output: "Response Size: 1071472"
    return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');
