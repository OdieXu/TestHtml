const People = {
    name:"xurui",
    age:36,
    address: {
        province:"湖北",
        city:"武汉",
    },
    ttt:"ceshi",
};


People.address.city = "孝感市"
console.log(People)

//可以给People添加属性
People.email = "xurui19870505@163.com"
console.log(People)

const peopleArray = [
    {
        name:"xu",
        age:30,
        ttt: "ss"
    },
    {
        name:"zhangsan",
        age:11,
    },
];
console.log(peopleArray)

console.log("测试json")
const jsonstr = JSON.stringify(peopleArray)
console.log(jsonstr)


//测试===/== ：都可以
if (People.age === 36) {
    console.log("36岁啦")
} else {
    console.log("岁数？？？")
}
if (People.name == "xurui") {
    console.log("我是徐锐")
} else {
    console.log("我不是")
}
//===会检查类型，==不会检查类型
const testAge = "10"
const testAge2 = 11
if (testAge == 10) {
    console.log("testAge == 10")
}
if (testAge === 10) {
    console.log("testAge === 10")
} else {
    console.log("testAge !=== 10")
}
if (testAge2 === 11) {
    console.log("testAge2 === 11")
} else {
    console.log("testAge2 !=== 11")
}

//测试switch
let provinceName
switch (People.address.province) {
    case "湖南": {
        provinceName = "湖南省"
        break;
    }
    case "湖北": {
        provinceName = "湖北省"
        break
    }
    default : {
        provinceName = "china"
    }
}
console.log(`省份=${provinceName}`)

//测试循环
for (let i = 0; i < 10; i++) {
    console.log(`for循环：i=${i}`)
}
const metarial = []
metarial[1] = "金"
metarial[0] = "铁"
metarial[2] = "铜"
metarial[3] = "银"
for (let i = 0; i < metarial.length; i++) {
    console.log(`metarial[${i}] = ${metarial[i]}`)
}
for (let element of metarial) {
    console.log(`element = ${element}`)
}




let j = 10
while (j > 0) {
    j--
    console.log(`while循环：j=${j}`)
}