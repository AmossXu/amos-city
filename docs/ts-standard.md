---
id: jts-standard
title: TS规范等
# sidebar_label: TS规范等
# slug: /
---

## TS规范及小技巧

### 小知识
##### React组件-分为： 类组件和函数式组件

- 类组件
```
class App extends React.Component<P, S> {
  state: S = {
    //...
  };
  render() {
      // return ...
  }
```
1. 使用组件声明时的Component<P, S>泛型参数声明，来代替PropTypes！
2. 泛型P定义当前组件上下文中this.props可获取的值。
3. 泛型S定义react组件中State内的值【尽量不要去使用State，用Dva.js中的Reducer去处理数据。所以传入的泛型S可以直接使用{} -》也就是<P, {}>】

- 函数式组件 // React V16.7之后由于hooks的加入
```
const App: React.FC<P> = props => {
    const { ... } from props
    return ...
}
```
1. v16.7起，由于hooks的加入，函数式组件也可以使用state
2. hooks也是相较于类组件中的HOC更加优雅的逻辑复用的方式
3. React.FC 是React.FunctionalComponent的简写
4. React.FC传入泛型P用于定义传入值函数内部可以用结构函数拿出想要的东西。


### TS规范以及技巧


##### 常用声明方式
```
// 类型别名：**使用 type 给类型起别名
// 联合类型：**使用 | 将类型规则隔开，表示该变量的值可为这些类型
// 交叉类型： 使用 & 将类型规则隔开，表示该变量的值必须满足所有的数据类型（一般用于对象）
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = NativeButtonProps & AnchorButtonProps
```

##### interface业务代码注释
```
interface Record {
  // 名字
  name: string;
  // 电话
  phone: number;
  // 地址
  address: string;
}
```
##### 继承

```
interface OutboundTable extends DefaultTableProps {
 // 很多地方需要去继承一些全局现有的常用业务定义 如常用的TableProps，这时候需要去继承全局共有定义 而不是全部重写。
 ...
}
```

##### ?用法

除了表示可选参数外

当使用A对象属性A.B时，如果无法确定A是否为空，则需要用A?.B，表示当A有值的时候才去访问B属性，没有值的时候就不去访问，如果不使用?则会报错
```
// 由于函数参数可选，因此parma无法确定是否拥有，所以无法正常使用parma.x，使用parma?.x向编译器假设此时parma不为空且为IDemo类型，同时parma?.x无法保证非空，因此使用parma?.x!来保证了整体通过编译
interface IDemo {
    x: number
}

let y:number

const demo = (parma?: IDemo) => {
    y = parma?.x!
    console.log(parma?.x)	// 只是单纯调用属性时就无需!	
    return y
}
    
```

##### 数组
```
interface IState {
  id?: number | null,
  uploading?: boolean,
  excludeControls?: BuiltInControlType[]
  // 数组请使用Xxx[] 而不是数组泛型Array<Xxx>
}
```

##### interface 声明顺序 只读 》 必选 》 可选
```
interface Props {
  readonly x: number;
  readonly y: number;
  name: string;
  age: number;
  height?: number;
  [propName: string]: any;
}
```

##### Partial'<'T>可将传入泛型内全部变为可选项
```
interface People {
    title: string;
    name: string;
}
 
const people: Partial<People> = {
    title: 'title',
}
```
##### Required'<'T>与之对应的可以讲其全部变为必选项
```
interface People {
    title?: string;
    name?: string;
}
 
const people1: People = {
    title: 'ts',
    name: 'weimeng'
}; // OK
 
const people22: Required<People> = {
    title: 'ts'
}; // Error: property 'name' missing
```
##### Readonly'<'T> 作用是将传入的属性变为变成只读
```
interface People {
    title: string;
    name: string;
}
 
const people: Readonly<People> = {
    title: 'todo list',
    name: chenfeng;
};
people.name = 'xxx' // 不可修改
```



