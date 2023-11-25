const arrays = [1, 2, 3, 4, 5];


[arrays[0], arrays[4]] = [arrays[4], arrays[0]]
// console.log(arrays)


let a = 1;
let b = 2;
[a, b] = [b, a]
// console.log(a, b)


// 2. distracture alias ":" this is alias
const user = {
    name: 'rahim',
    age: 12,
    jobTitle: "front end developer",
    exp: 2
}

const {age:old , jobTitle: title} = user
// console.log(old, title)

const inp = document.querySelector("#inp").valueAsNumber
console.log(inp)





