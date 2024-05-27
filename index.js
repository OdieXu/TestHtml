// console.log("单独的我呢就爱你");

// let name = "xurui";
// console.log("name=%s", name);
// const age = 36
// console.log("age=%d", age);
// console.log(typeof name)

// let score = 2.7
// console.log(typeof score)
// let x = null
// console.log(typeof x)
// let y = undefined
// console.log(typeof y)
// let b = true

console.log("测试字符串")
let peopleName = "徐锐"
let peopleAge = 36
console.log(`我叫${peopleName}, 今年${peopleAge}岁`)
let nameLength = peopleName.length
let ageLength = peopleAge.length
console.log(`nameLength=${nameLength}, ageLength=${ageLength}`)
let subStr = peopleName.substring(0, 1)
console.log(`subStr=${subStr}`)

//测试const
const myName = peopleName
// myName = "sss"
console.log(`myName = ${myName}`)


console.log("测试数组")
//如果是const的数组的话，仍然可以改变数组内的元素，并且可以push元素
const nameArray = new Array("赵","钱","孙","李")
nameArray.push("xu")
nameArray.push(123)
nameArray[2] = 333
let sex = true
nameArray.push(sex)
console.log(nameArray)


console.log("测试复杂数据结构")
const person = People
person.address.city = "孝感市"
console.log(person)




