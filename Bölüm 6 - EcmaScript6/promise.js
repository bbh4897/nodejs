const x = function () {
    return new Promise((resolve, reject) => {
        resolve("OK");
    })
};

x()
    .then((data) => {
        console.log(data);
    });
