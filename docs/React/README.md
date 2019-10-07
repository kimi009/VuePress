### 初探React
```
react判断是HTML 元素还是组件的规则是看第一个字母是否是大写  ，大写就是组件
```

```
react构造函数中必须要写super(props)，如果没有写，在组件实例被构造出来之后，
类实例的所有成员函数就无法通过this.props访问到父组件传递进来的props。
很明显this.props是在React.Component中完成的工作之一
```

```
react 中propTyps关于对传入的props的类型限制，这个东西只有在开发环境下才有用，
只是给开发者自己看的，一旦到了生产环境这个是没什么用的，
所以为了优化缩减代码还是去掉比较好，可以用
babel-react-optimize这个插件可以
```
```
react中的componentWillReceiveProps钩子函数只要是父组件发生重新渲染就是执行
```
```
react中触发强制更新 
<button onClick={() => this.forceUpdate()}>强制更新forceUpdate</button>
上面的匿名函数的写法不推荐，因为每次渲染都会创建一个新的匿名方法对象，
而且引发子组件不必要的重新渲染
```
```
shouldComponentUpdate(nextProps, nextState) {return true;}
这个钩子可以用来控制是否要渲染界面，可以代替一些if else语句
```


```javascript
export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      //这个不能用push unshift 因为reducer 必须是一个pure function  不能有任何的副作用，push unshift会改变原来的数据
      return [
        {
          id: action.id,
          text: action.text,
          complete: false
        },
        ...state
      ]
    case REMOVE_TODO:
      return state.filter(todoItem=>{
        return todoItem.id !== action.id;
      })
    case TOGGLE_TODO:
      return state.map(todoItem => {
        if (todoItem.id === action.id) {
          return { ...todoItem, complete: !todoItem.complete }
        } else {
          return todoItem
        }
      })
    default:
      //这句代码不能省略，因为reducer函数会接受任意action，包括它不感兴趣的action 这样会执行default 让state原样返回表示不修改state
      return state;
  }
}
```

```javascript
 <ul className="todo-list">
    {
        //这里只能是javascript表达式，所以不能用for while循环，因为他们产生的是语句
        //不是表达式
      todos.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={() => onToggleTodo(item.id)}
          onRemove={() => onRemoveTodo(item.id)}
        />
        ))
    }
    </ul>
```