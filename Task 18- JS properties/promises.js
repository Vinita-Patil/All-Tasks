let promise = new Promise((resolve, reject) => {
    console.log("This is Promise");
    resolve('541');

})

let promise2 = new Promise((resolve, reject) => {
    console.log("This is Promise 2");
    reject("Something is wrong");
})

/*
//Example: data api

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
            if (getNextData) {
                getNextData();
            }
        }, 3000);
    });
}*/