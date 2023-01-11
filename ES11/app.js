// import * as m1 from './hello'; // 静态导入

// 获取元素
const btn = document.getElementById('button');
btn.onclick = function() {
    // import() 动态导入，返回的是 Promise 对象
    import('./hello.js').then(m1 => {
        m1.hello();
    });
}