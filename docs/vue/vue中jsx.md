## vue 中 jsx 的用法

---

1. 函数式组件，没有模板必须要有个 render 函数

```
xxx.js文件  注意是js文件
export default{
  render(h){ // h就是createElement
    return h(标签名,标签属性,值)
    //写法二
    return <h1 on-click={()=>alert(1)} style={{color:'red'}}>你好</h1>
  }
}

```
2. this.$slots.default就是默认的插槽内容

3. 老爸用v-slot:a="{item,a}"  <===>  儿子 <slot name="a" :item='item' :a='1'></slot>
  不是具名的作用域插槽就是v-slot:default

currentTarget 注册时间源
target是点击的dom节点