// // 静态类型
// let b: number = 123;
// // b = '123';
// b = 456

type point = {x: number, y: number} // 类型别名
// interface point {x: number, y: number}

function tsdemo(data: point) {
    console.log('123456')
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsdemo({x: 1, y: 123});

// 更好的错误提示
// 类型的声明 