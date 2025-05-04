// *2. Day2 [Introduction to Node.js]
//      a)Introduction
//         Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix,  macOS, and more. Node.js runs on the V8 JavaScript engine.

//      b)Installing Node.js and npm.
//         i) Download and install node js from internet.
//         ii) How to check installed or not [go to terminal type node -v, if version come its install]
//         iii) Node will give us run time environment untill it run on terminal

//         iV) npm init -y to install package.json

//      c)Working with Node and npm

//      d)Working with Modules
//         i)filesystem
//        ii)http

// i)filesystem
//    a)writeFile
//    b)appendFile
//    c)copyfile
//    d)rename
//    e)unlink [delete file]

//create filesystem
const fs = require("fs");

//! a)writeFile [create file]
//* we run the file day2.1.js in terminal it will create file called hey.txt

fs.writeFile("hey.txt", "Hello,this is Shankar", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Link Successful");
  }
});

//! b)appendFile
//* we run the file day2.1.js in terminal it will add this (after add the sentence) after (Hello,this is Shankar)
//* now new line is (Hello,this is Shankar after add the sentence)

// fs.appendFile("hey.txt", " after add the sentence", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Link Successful");
//   }
// });

//! c)copyfile
//* it will copy hey.txt file to helloCopy.txt and it contains all previous values

// fs.copyFile("newHey.txt", "helloCoyp.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Copy Successful");
//   }
// });

//! d)rename
//* it will change hey.txt filename to newHey.txt and it contains all previous values

// fs.rename("hey.txt", "newHey.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Link Successful");
//   }
// });

//! e)unlink [delete file]
//* it will remove or delete hey.txt

// fs.unlink("hey.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Removed Successfully");
//   }
// });

//! remove folder
//* it will delete folder
//we will recursive : true because if folder is empty it will delete the folder
// empty folder cannt be deleted without recursive : true
//we can use rm or rmdir both are same

// fs.rm("./gg", { recursive: true }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("remove successfully");
//   }
// });
