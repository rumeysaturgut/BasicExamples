function getFirstName(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(name);
        }, 2000);        
    });
}

function getLastName(lastname) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(lastname);
        }, 5000);        
    });
}

function getName() {
    const promise = new Promise(function (resolve, reject) {
        resolve('turgut');        
    });

    const promise2 = new Promise(function (resolve, reject) {
        resolve('rumeysa');
    })
    
    return new Promise(function(resolve) {
        promise.then(function(result1) {
            promise2.then(function(result2){
                resolve(result2 + " " + result1);
            })
        });
    });
}
getName().then(function(name) {
    console.log(name);
});