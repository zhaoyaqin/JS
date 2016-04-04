
console.log("hello js");
var a = 1;
var b = 2;
var c = a + b;
console.log(c);
// 函数
function max(a, b) {
	return a > b ? a: b;
}
console.log(max(2, 8));
var func = max;
console.log(func(4, 9));
// 参数
function max1() {
	console.log(arguments);
	var maxValue = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		maxValue = max(maxValue, arguments[i]);
	}
	return maxValue;
}

var result = max1(1, 5, 30, 7, 300);
console.log(result);

// 面向对象
// 声明类 第一种
function A() {
	
}
// 实例方法
A.prototype.sayHello = function() {
	console.log("name is js");
}
// 静态方法
A.sayHi = function() {
	console.log("hello jikexueyuan");
}
// 声明对象
var a = new A();
a.sayHello();
A.sayHi();
// 继承
function B() {
	
}
B.prototype = new A();
var b = new B();
b.sayHello();
// 第二种 闭包的方式
function C() {
	this.sayHello = function() {
		console.log("bibao");
	}
	
}
var c = new C();
c.sayHello();
// canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
content.fillStyle = "#ff000";
content.fillRect(0, 0, 100, 100);

