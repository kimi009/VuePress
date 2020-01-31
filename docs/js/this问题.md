## this问题

### new操作符做了什么事？
> 1、 先默认创建一个空对象
> 2、 让这个对象的__proto__ 指向函数的prototype
> 3、 让当前作用域和this绑定
> 4、 返回这个对象

### typeof  instanceof constructor toString.call()

> instanceof 检测当前实例是否是属于某个类的，实例的constructor是否指向这个函数


> 函数的角色：作为普通函数和，作为构造函数使用

> in  方法可以检测该属性是否是它的一个属性
```js
  function fn(){
    this.a=100
  }
  let f1 = new fn;
  console.log('a' in f1)
```

### 关于原型的
> 每一个函数（普通函数，构造函数也就是类）天生自带一个prototype属性，其属性值是一个对象数据类型
> 这个prototype属性里面天生自带了一个constructor属性，这个constructor属性值指向当前的原型所属的类
> 每一个对象天生自带一个__proto__属性，属性值指向当前实例所属的类的原型


