# Домашнее задание по JS - контексты

## Опеределить на какой контекст будет ссылатся this в результате выполнений следующих примеров

```

function isContextEqualTo(contextLink) {
   console.log(contextLink === this);
}

function name() {
   isContextEqualTo(window); // ??
}

var name = "Vasya";

var user = {
    name: "Lylya",
    getName: function () {
        return this.name;
    }
}

console.log(user.getName()); // ??

var getName = user.getName;

console.log(getName()); // ??

```

```

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.getName = function () {
       return this.name;
    };
}

Person.prototype.getAge = function () {
    return this.age;
};

var user = new Person("erer", 45);


var getAge = Person.prototype.getAge;
var getName = user.getName;

consoe.log(getAge()); // ??
consoe.log(getName()); // ??
consoe.log(user.getName()); // ??

```

