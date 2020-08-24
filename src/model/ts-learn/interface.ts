// 接口：对象型，函数型
// *****************对象型接口**********************************************
// 1.利用对象型接口封装原生ajax
interface config {
  type: string; //post,get...
  url: string; //接口请求地址
  data?: string; //请求参数，可选类型
  dataType: string; //json ...
}
// 封装ajax:
function ajax(config: config) {
  var xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  if (config.data) {
    xhr.send(config.data);
  } else {
    xhr.send();
  }

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('请求成功');
      if (config.dataType == 'json') {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}
// ajax({
//   type: 'get',
//   data: 'name=zhangsan',
//   url: 'http://www.example.com/api', // api接口url
//   dataType: 'json',
// });

// ********函数型接口 ,非常类似于java、c#中使用lambda表达式传入匿名函数************
// 2. 利用函数型接口封装一个【计算数组被某种算法运算的结果】
interface calcTwo {
  (a: number, b: number): number;
}

/**
 * 计算数组被某种算法运算的结果
 * @param {number[]} arr  数组
 * @param {CalcTwo} calc  用户指定的算法函数
 * @param {number} initVal  传入初始值
 * @returns {number}  得到最终运算结果
 **/

function calcFn(arr: number[], calc: calcTwo, initVal: number) {
  var result = initVal;
  arr.forEach((value) => {
    result = calc(result, value);
  });
  return result;
}

var arr = [1, 2, 3, 4, 5];
// 相加：
var add = function(a: number, b: number) {
  return a + b;
};
var resAdd = calcFn(arr, add, 10);
console.log('相加----', resAdd);

//相乘：
var multiply = function(a: number, b: number) {
  return a * b;
};
var resMultiply = calcFn(arr, multiply, 0);
console.log('相乘----', resMultiply);

// *******************可索引型********************************************
//  可索引(数组型)接口   数组  可索引对象(hash、堆栈)  不常用
interface indexArr {
  //定义索引key为number类型，索引值为string类型
  [index: number]: string;
}

var arr1: indexArr;
arr1 = ['aa', 'bb', 'cc'];
var arr2: indexArr;
arr2 = { 1: 'hello', 2: 'world' };
console.log(arr1);
console.log(arr2);

/*
 * 类类型接口:****************************************************************
 *     类类型接口: 对类的规范  ,这种类型的接口在传统面向对象语言中最为常见，
 *     比如java中接口就是这种类类型的接口 。这种接口与抽象类比较相似，但是接口只能含有为抽象方法、成员属性。
 *     实现类中必须实现接口中所有的抽象方法和成员属性。
 */
interface Animal {
  name: string;
  eat(s: string): string;
}
//实现接口使用implements关键字，继承 使用extends关键字
// 狗狗:
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat(s: string) {
    return this.name + '狗狗吃' + s;
  }
}

let dog = new Dog('抱抱');
var res = dog.eat('西蓝花');
console.log(res);
