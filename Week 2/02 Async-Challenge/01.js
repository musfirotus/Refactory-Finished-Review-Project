const fs = require('fs')

const readDir = (path, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, encoding, (err, data) => {
            if (err) return reject(err);
                resolve(data);
        });
    });
}

readDir('/')
    .then(data => console.log(data))
    .catch(err => console.log(err));