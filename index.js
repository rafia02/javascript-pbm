// 1. how to remove falsy value in an array 

// javascript has 6 falsy value. like as, 
// 0, null, undefined, NaN, "", false

const valueee = ["a", 1, false, {}, [], "hello", undefined, 0, null, "", NaN]
// just using Boolean funtction 
// console.log(valueee.filter(Boolean))



// console.log(typeof({}))
// console.log(typeof([]))
// console.log(typeof(NaN))
// console.log(typeof(null))
// console.log(typeof(undefined))



// 2. convert any value to Boolean 

// using !! in font of value 
// console.log(!!"any value")



// 3. resizing a array like as crop an array 

// we can use arrays length property 
const arrayExm = [1, "value", "chcek", 5]
arrayExm.length = 2

// console.log(arrayExm)


// 4. how to flatren multidirection array 

const multyArray = ["rahim", [["korim", "harun", 1, [2, "rinku", 3]], 4], "suma"]

// by using array flat method. but it is flaten by one level array. 
// if we falten two level array then we can use falt(Infinity)

// console.log(multyArray.flat(Infinity))


// 4. replease any word 

const replease = "react a open sorce javascript Farmwork. this farmwork is high. we can use this farmwork for ui"

const newReplese = replease.replace(/farmwork/g, "laibary")

// console.log(newReplese)


// 5. perfomence chek korar jonno 
const fst = performance.now()


for( i = 0; i <= 80 ; i++){
    // console.log(i)
}

const lst = performance.now()

// console.log(lst - fst)


// 6. swaping the valu 
 
// let array = [1, 2, 3, 4, 5]

// // old way 
// // const temp = array[4]
// // array[4] = array[0] 
// // array[0] = temp
// // console.log(array)

// // latest way 

// // use by array distracture way 

// [array[0], array[4]] = [array[4], array[0]]
// console.log(array)




