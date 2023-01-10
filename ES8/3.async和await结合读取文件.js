// 1. 引入 fs 模块
const fs = require("fs");

// 读取
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.md', (error, data) => {
            if (error)
                reject(error);
            else
                resolve(data);
        });
    });
}
function readDemo1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/Demo1.md', (error, data) => {
            if (error)
                reject(error);
            else
                resolve(data);
        });
    });
}
function readDemo2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/Demo2.md', (error, data) => {
            if (error)
                reject(error);
            else
                resolve(data);
        });
    });
}

// 声明一个 async 函数
async function main() {
    let weixue = await readWeiXue();
    let demo1 = await readDemo1();
    let demo2 = await readDemo2();

    console.log(weixue.toString());
    console.log(demo1.toString());
    console.log(demo2.toString());
}

main();