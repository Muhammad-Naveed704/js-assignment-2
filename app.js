


// function foo( ){
// let obj ={
//     name:"Naveed",
//     gender:"male",
//     age:23,
//     course:"JavaScript",
//     teacherName:"ishaq Bojhni",
//     cnic:4220066653525737,
// }

// console.log(obj);
// };
// -----------------------------------------------Qno1----------------------------------------------

//  function add(num){
//      return num + 5    
// }

// console.log(add(5));

// -----------------------------------------------Qno2----------------------------------------------


// let user =prompt("Enter Your Furts");
// let arr =[ "apple","banana","mango","orange"];
// for(let i =0; i<arr.length; i++){
//     if(arr[i]=== user){
//         alert(true )
//         break
//     }else{
//         alert( false)
//         break
//     }
// }

// -----------------------------------------------Qno3---------------------------------------------



// let user = prompt("write paragraph")
// let myPara = document.querySelector("#para");
// myPara.innerText = user;

// -----------------------------------------------Qno4---------------------------------------------
//  let user = prompt("write list")
// let list = document.querySelector("#list");
// list.innerHTML = user;

// -----------------------------------------------Qno5---------------------------------------------

// let text=document.querySelector(".text");
// text.innerHTML="Saylani Mass It Traning program";
// text.style.backgroundColor= "red";
// text.style.color= "white";
// text.style.width= "600px";
// text.style.marginLeft= "350px";
// text.style.marginTop= "200px";
// text.style.paddingLeft= "150px";

// -----------------------------------------------Qno6---------------------------------------------

// let userKey =prompt("Enter Key Name");
// let userVal = prompt("Enter Value name");
// localStorage.setItem(userKey,userVal);

// ----------------------------------------------Qno7---------------------------------------------

// let preUserdata= [];
// function user(){
//     let userdata={
//         name:prompt("Enter Your Name"),
//         gender:prompt("Enter Gender"),
//         age:+prompt("Enter your age"),
//         fruit:prompt("Enter Your Favorite Fruit Name"),
//         martialStatus:prompt("Enter Your Martial Status"),

//     };
//     preUserdata.push(userdata);
//     console.log(preUserdata);
//     let stringify=JSON.stringify(preUserdata)
//     localStorage.setItem("preUserdata",stringify);

// };

// -----------------------------------------------Qno8---------------------------------------------
// let preStudent= localStorage.getItem("student");
// let student=preStudent ? JSON.parse(preStudent): [];
// function foo(){
//     let studentdata={
//         name:prompt("Enter Student Name"),
//         mobileNum:+prompt("Enter Mobile no"),
//         rollNum:prompt("Enter Roll Number"),
//         Course:prompt("Enter Course Name"),
//         className:prompt("Enter Class Name"),
//         teacherName:prompt("Enter Teacher Name"),

//     };
//     student.push(studentdata);
//     console.log(student);
//     let stringify=JSON.stringify(student)
//     localStorage.setItem("student",stringify);


// };
