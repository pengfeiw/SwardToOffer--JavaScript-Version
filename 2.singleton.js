//题目：
//设计一个类， 我们只能生成该类的一个实例。

//（一）.我的实现方式：以Person类为例
function Person(name, age){
    if(Person.prototype._person){
        //如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象。
        //如果这里return的是字符串，那么调用new结果为{}
        return Person.prototype._person;    
    }
    else {
        this.name = name;
        this.age = age;
        Person.prototype._person = this;
    }
}

//测试
var p1 = new Person("Wang Pengfei", 25);  
var p2 = new Person("Tang Weijuan", 24);  

console.log(p1);    //{name: "Wang Pengfei", age: 25}
console.log(p2);    //{name: "Wang Pengfei", age: 25}

console.log(p1 === p1._person); //true
console.log(p2 === p1._person); //true
console.log(p2 === p2._person); //true


//（二）.使用闭包的形式
var Person2 = (function(){
    var obj = {
        name: "Wang Pengfei",
        age: 25
    }

    function init(){
        return obj;
    }

    return {getInstance: init};
})();

//测试
var p3 = Person2.getInstance();
var p4 = Person2.getInstance();

console.log(p3 === p4); //true
