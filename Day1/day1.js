// *1. Day1 [Fundamentals of JS] - Topics to learns backend
//     a) Introduction
//     b) Fundamentals of JavaScript
//     c) Arrays [ foreach , map , filter , find , indexof ]
//     d) Objects in JavaScript
//     e) Functions and return
//     f) Asynchronous JavaScript coding

let ar = [10, 2, , 4, 5];
ar.forEach(function (val) {
  // console.log(val + 100);
  if (val % 2 == 0) {
    console.log("Divided ", val);
  } else {
    console.log("Not Divided ", val);
  }
});

//map [ it always make new arrary ]
let arrMap = [10, 20, 30, 40, 50];
let newArr = arrMap.map(function (val) {
  return val + 100;
});

console.log(newArr);

//filter [ it always gives new arrary ,it will filter out the array]
let arrFilter = [10, 20, 30, 40, 50];
let newArr1 = arrMap.filter(function (val) {
  return val > 30;
});
console.log(newArr1);

//object
let obj = {
  name: "Shankar",
  age: 25,
  id: 23,
};
Object.freeze(obj); //!this will not allow to override the vale
//ways to call object
obj.name = "Rahul";
obj["name"] = "Rahul2";
console.log(obj.name);

// async apicall
async function apiCall() {
  var user = await fetch("https://jsonplaceholder.typicode.com/users");
  var res = await user.json();
  console.log(res); //whole object get
  console.log(res[1].email); //get value
}
apiCall();
