Проверка по JS:

### 1 task

Где в документе может располагаться тэг script по стандарту HTML ?
Где его лучше всего размещать и почему?

### 2 task

Что такое синхронность и асинхронность?

### 3 task

Какие типы данных существую в JS?

### 4 task

```
a = new Array(1,2,3)
b = new Array(1,2,3)
Правда ли что a == b ?
```

### 5 task

Чем отличаются выражения?

```
i++
++i
```

### 6 task

Какие из этих вариантов задают массив из элементов "a", "b" ?

```
 var a = new Array("a","b")
 var a = { "a", "b" }
 var a = ( "a", "b" )
 var a = [ "a", "b" ]
 var a = "a,b".split(',')
```

### 7 task

Какова длина a.length массива a ?

```
var a = []
a[1] = 5
a[5] = 55
```

### 8 task

В чем разница между методом и свойством обьекта?

### 9 task

На что ссылается переменная this в этих случаях?

```
function name() {
  console.log(this);
}
name()
```

```
function name() {
  console.log(this);
}

var obj = {};

obj.name = name;
obj.name();
```

```
function Name() { }

Name.method = function() {
  console.log(this);
}

var name = new Name()

name.method();
```