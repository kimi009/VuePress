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

3 自定义的组件里面定义如下
```
组件名字是List
<div>
  <template v-for="(item,index) in data">
      <slot name="a" :item="item" :a="1"></slot>
  </template>
</div>
```
4. 正常使用上面的组件
```
  <List :data="['a','b','c']">
    <template v-slot:a="{item,a}"> //这个:a是上面定义的插槽的名字，没有就是default
      <li>{{item}} {{a}}</li>
    </template>
  </List>
```

currentTarget 注册时间源
target是点击的dom节点