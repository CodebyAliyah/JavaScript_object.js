
//singleton : jum hum object ko constructor k tariqay sy banay gy to usko singleton *Object* boly gy.
Object.create

// object literal :

const myData = {
  Name :"Ali Yahya" ,
   roll_no : 123_023 ,
   age : 21 , 
   mysym : "key1" ,
   Email : "aliyah@gmail.com" ,
   isLogedIn : true ,
}

console.log(myData.Email) 
console.log(myData["Email"])
consol.log(myData [mysym])



myData.Email = "ali@microsoft.com"

console.log(myData)

myData.greeting = function () {
  console.log ("Hello Ali Yahya") ;
}

myData.greetingTwo = function () {
  console.log (`Hello Ali Yahya JS user , ${this.Email}`) ;
}

console.log(myData.greeting())

console.log(myData.greetingTwo())


