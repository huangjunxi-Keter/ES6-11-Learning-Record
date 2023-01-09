// 1. 引入 fs 模块
const fs = require('fs');

/* 回调地狱实现 */
// fs.readFile('./resources/为学.md', (err1, data1) => {
//     fs.readFile('./resources/Demo1.md', (err2, data2) => {
//         fs.readFile('./resources/Demo2.md', (err3, data3) => {
//             let result = `${data1}\n${data2}\n${data3}`;
//             console.log(result);
//         });
//     });
// });

// Promise 实现
const result = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve([data]);
    });
}).then(value => {
    // console.log(value.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/Demo1.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    // console.log(value.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/Demo2.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\n'));
});