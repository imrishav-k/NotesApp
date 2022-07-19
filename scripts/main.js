// import AWS from "../node_modules/aws-sdk";
AWS = require("aws-sdk");
// // var requirejs = require(["requirejs"]);

// // requirejs.config({
// //   //Pass the top-level main.js/index.js require
// //   //function to requirejs so that node modules
// //   //are loaded relative to the top-level JS file.
// //   nodeRequire: require
// // });
// let awsConfig = {
//   "region":"ap-south-1",
//   "endpoint":"https://ap-south-1.console.aws.amazon.com/",
//   "accessKeyId":"AKIA2SCXPOE7I3XXULZM",
//   "secretAccessKey":"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"
// }

// AWS.config.update(awsConfig);

var dynamoDB = new AWS.DynamoDB.DocumentClient({
  region:"ap-south-1",
  accessKeyId:"AKIA2SCXPOE7GX4KMHWW",
  secretAccessKey:"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"
})

// global.window.ddb = dynamoDB;

async function insertDataUser(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let pass = document.getElementById("password").value;
  var params = {
    TableName: "users",
    Item: {
      user_name: name,
      email_id: email,
      phone_no: 7894561232,
      password: pass
    }
  };

  let putItem = new Promise((res, rej)=>{
    dynamoDB.put(params, function(err, data){
      if(err){
        console.log(err);
        rej(err);
      }
      else{
        res("Inserted data");
      }
    });
  });
  const result = await putItem;
  console.log(result);
}


// function showonconsole(){
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let pass = document.getElementById("password").value;
//   console.log(name);
//   console.log(email);
//   console.log(phone);
//   console.log(pass);
// }
// function fun2(){
//   console.log("main.js");
// }
// fun2();

// function saveData(){
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let password = document.getElementById("password").value;
    
//     let users = new Array();
    
//     if(JSON.parse(localStorage.getItem("users"))){
//         users = JSON.parse(localStorage.getItem("users"));
//     }else{
//         users = [];
//     }
    
//     if(users.some((user)=>{return user.email==email})){
//         alert("duplicate data");
//     }else{
//         users.push({
//             "name":name,
//             "email":email,
//             "phone":phone,
//             "password":password
//         });
//         localStorage.setItem("users", JSON.stringify(users));
//     }
// }


// function authenticate(){
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let users = new Array();
    
//     if(JSON.parse(localStorage.getItem("users"))){
//         users = JSON.parse(localStorage.getItem("users"));
//     }else{
//         users = [];
//     }

//     if(users.some((user)=>{return user.email==email && user.password == password})){
//         let current_user_data = users.filter((user)=>{return user.email==email && user.password == password});
//         localStorage.setItem("name", current_user_data[0].name);
//         localStorage.setItem("email", current_user_data[0].email);
//         localStorage.setItem("phone", current_user_data[0].phone);
//         window.location.href="profile.html"
//         alert("login successful!!");
//     }else{
//         alert("Login Failed!!");
//     }
// }

// function logout(){
//     localStorage.removeItem("name");
//     localStorage.removeItem("email");
//     localStorage.removeItem("phone");
// }

// function createNotes(){
//     let note = document.getElementById("note").value;
//     let notes = new Array();
//     let email = localStorage.getItem("email");

//     if(JSON.parse(localStorage.getItem("notes"))){
//         notes = JSON.parse(localStorage.getItem("notes"));
//     }else{
//         notes = {};
//     }
//     let flag = 0;
//     for(let e in notes){
//         if(e == email){
//             flag = 1;
//             notes[e].push(note);
//         }
//     }
//     if(flag == 0){
//         notes[email] = [];
//         notes[email].push(note);
//     }
//     localStorage.setItem("notes", JSON.stringify(notes));
// }


///////////////////////////////////////////////////////////////////////////////////


// var express = require('express');
// var app = express();

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Zxyr12#r"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

// function insertDataUser(){
//     con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");
//       var userName = document.getElementById("name");
//       var phone = document.getElementById("phone");
//       var email = document.getElementById("email");
//       var password = document.getElementById("password");

//       var sql = "INSERT INTO users (user_name, phone, email_id, password) VALUES ?";

//       var values = [[userName, phone, email, password]];
      
//       con.query(sql, [values] , function (err, result) {
//         if (err) throw err;
//         console.log("Query Executed!!");
//       });
//     });
// }