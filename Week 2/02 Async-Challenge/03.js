// const num = async () => {
//     for (let i = 1; i <= 3; i++) {
//         await new Promise(resolve => 
//             setTimeout(resolve, 1000)
//         );
//         console.log(i);
//     }
//     console.log('Done');
// }
function num() {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= 3; i++) {
            console.log(i);
            setTimeout(() => {
                resolve();
            }, 1000)
        }
    })
}
num().then(() => console.log('Done'))