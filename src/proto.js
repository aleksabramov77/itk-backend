// const Samurai = function (name){
//     this.name = name
// }
//
// Samurai.prototype.hello = function () {
//     console.log("Привет, я " + this.name)
// }

class Samurai {
    static weapon() {
        console.log("Меч ")
    }

    constructor(name) {
        this.name = name
    }

    hello() {
        console.log("Привет, я " + this.name)
    }
}

const samurai1 = new Samurai("Петя")

console.log(Samurai.__proto__ === Function.prototype)
console.log(Samurai.__proto__.__proto__ === Object.prototype)

console.log(samurai1.__proto__.__proto__ === Object.prototype)
console.log(samurai1.__proto__.constructor.__proto__ === Function.prototype)

console.log(samurai1.__proto__.__proto__.__proto__ === null)

