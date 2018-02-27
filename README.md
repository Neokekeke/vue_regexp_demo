# regexp_demo

> 使用了vee-validate插件和vue-router，自定义正则校验。

![](https://raw.githubusercontent.com/Neokekeke/vue_regexp_demo/master/src/assets/regexp.png)





###**正则表达式查表规则：**

http://tool.oschina.net/uploads/apidocs/jquery/regexp.html

###**基本修饰符：**

g 全局搜索字符串

i 忽略大小写

m 多行搜索

^ 取反或者以什么开头

$ 以什么结束结尾

[]  表示一个范围0-9,a-z,A-Z

\- 表示一个范围

\d 数字字符类

\D 非数字字符

\s 空白符

\S 非空白符类

\w 单词字符包括（字母，数字，下划线）

\W 非单词字符

\b 单词的边界

\B 非单词边界

. 是任意字符

() 分组

| 或者

###**量词** {n} n是代表数字

？出现0次或者1次（最多出现一次）

\+ 出现1次或者多次

\* 出现0次或者多次

{n} 出现n次

{n,m} 出现n到m次

{n,} 出现至少有n次


----------



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
