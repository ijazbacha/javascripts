// console.log('Try hard to learn javascripts!');

// console.log('hahahaha');

// var myName = 'Ijaz Bacha'
// var myGender = 'Male'

// console.log(myName)
// console.log(myGender)

// var myage = 17
// console.log(typeof(myage))

// var a = 10
// var b = 20

// sum = a + b
// sub = a - b
// mul = a * b
// div = a / b

// console.log(sum)
// console.log(sub)
// console.log(mul)
// console.log(div)

// var a = 10 
// var b = 20

// console.log(a == b)
// console.log(a != b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a > b)
// console.log(a >= b)

// var a = 10
// var b = 20

// console.log(a < b && a > 11)
// console.log(a < b || a > 11)
// console.log(!(a < b && a > 11))

// var a = 7
// var b = '7'

// console.log(a == b) // only check the value of variable
// console.log(a === b) // check the value as well as type of the variable

// var nameStd = 'a'

// if (nameStd == 'a'){
//     console.log('your name is: ' + nameStd)
// }
// else if (nameStd == 'khan'){
//     console.log('your name is: ' + nameStd)
// }
// else{
//     console.log('no name')
// }


// function test(){
//     console.log('This is a function')
// }

// test()

// function alertFun(){
//     alert('This is alert function')
// }

// alertFun()


// function sumNumber(num1, num2){
//     var result = num1 + num2
//     document.getElementById('add').innerHTML = 'The answer is: ' + result
// }


// var num1 = parseInt(prompt('Enter number'))
// sumNumber(num1 , 20)


// var age = 20
// var result = (age >= 18) ? 'You can vote':'You cant vote'
// console.log(result)

// var myName = ''

// switch(myName){
//     case 'a':
//         console.log('your name is: ' + myName)
//         break

//     case 'b':
//         console.log('your name is: ' + myName)
//         break

//     case 'c':
//         console.log('your name is: ' + myName)
//         break

//     default:
//         console.log('name not found')
// }


// var num = 0

// while(num <= 10){
//     console.log(num)
//     num++
// }

// console.log('-------------------')

// var num = 0
// do{
//     console.log(num)
//     num++
// }while(num <= 10)


// for(i=0; i<=10; i++){
//     console.log(i)
// }

// console.log('-----------')

// for(i=1; i<=10; i++){
//     console.log('8 * ' + i + ' = ' + 8 * i)
// }



// function sum(num1, num2){
//     result = num1 + num2
//     return result
// }

// var addNumber = sum(100, 20)
// console.log(addNumber)


// var sum = function(num1, num2){
//     result = num1 + num2
//     return result
// }

// var add = sum(10, 10)
// console.log(add)

// const add = () => {
//     let a = 10, b = 20
//     return a + b
// }

// sum = add()
// console.log(sum)


// let fruits = ['mango', 'apple', 'banana', 'kiwi']

// for(let i=0; i<fruits.length; i++){
//     console.log(`fruit name is: ${fruits[i]}`)
// }

// console.log('------------')

// for(let fruit in fruits){
//     console.log(fruits[fruit])
// }

// console.log('------------')

// for(let fruit of fruits){
//     console.log(fruit)
// }



// let shop = ['shoes', 'dress', 'watch']
// shop.push('cloth')
// console.log(shop)

// shop.unshift('bigs')
// console.log(shop)


// let countries = ['pakistan', 'usa', 'uae', 'afghan']
// countries.pop()
// console.log(countries)

// countries.shift()
// console.log(countries)



// let countries = ['pakistan', 'usa', 'uae', 'afghan']

// let indexofcountry = countries.indexOf('usa')

// if(indexofcountry){
//     let count = countries.splice(indexofcountry,0,'aus') 
//     console.log(count)
// }
// console.log(countries)



// let country = ['pakistan', 'usa', 'uae', 'afghan']
// let indexcountry = country.indexOf('usa')

// if(indexcountry){
//     let count = country.splice(indexcountry,1)
// }else{
//     console.log('cant be found')
// }
// console.log(country)


// let number = [1, 2, 3, 4]

// let newNumber = number.map((currval) => {
//     return currval * 2
// }).filter((currval) => {
//     return currval > 2
// }).reduce((acc, currval) => {
//     return acc += currval
// }, 7)

// console.log(newNumber)


// let currentdate = new Date()
// console.log(currentdate)
// console.log(currentdate.toString());
// console.log(currentdate.toLocaleDateString());
// console.log(currentdate.toLocaleString())
// console.log(currentdate.toTimeString())
// console.log(currentdate.toUTCString())
// console.log(currentdate.getDate())
// console.log(currentdate.getDay())
// console.log(currentdate.getFullYear())
// console.log(currentdate.getHours())
// console.log(currentdate.getMonth())
// console.log(currentdate.getTime())
// console.log(currentdate.getTimezoneOffset())

// let nowdate = Date.now()
// console.log(nowdate);


function show_date(){
    let currentdate = new Date()
    let date = currentdate.toLocaleDateString()
    document.getElementById('date_demo').innerHTML = date

    let time = currentdate.toLocaleTimeString()
    document.getElementById('time_demo').innerHTML = time
}

(function(){
    setInterval(() => {
        let currentdate = new Date()
        let time = currentdate.toLocaleTimeString();
        document.getElementById('runing_time').innerHTML = time;
    }, 1000);
})();
















