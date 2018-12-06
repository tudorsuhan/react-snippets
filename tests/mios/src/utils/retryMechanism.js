export const retryMechanism = (url, options, n) => {
    return new Promise((resolve, reject) => {
        fetch(url, options).then(resolve)
            .catch((error) => {
                if (n === 1) return reject(error);
                resolve(retryMechanism(url, options, n - 1));
            })
    });
}