
// var a=30;
// var b=20;
// document.write("number 1= " + a + " and number 2 = " + b);
// document.write("sum = "+ (a + b));

// var text = "Naimul Islam";
// console.log(text.charAt(2));
// console.log(text.slice(0,6));
// console.log(text.length);
// console.log(typeof(text.length));
// var text2 = "Rowja";
// console.log(text.concat(" "+text2));
// // var a=5;
// // console.log(a++);
// // console.log(++a);
// // console.log(a--);
// // console.log(--a);
// //assignment operator..
// var b=7;
// console.log(b-=1);
// console.log(b+=2);
// console.log((b/=2));
// console.log(b*=3);
// console.log(b**=2);
// console.log(b%=5);

// var c;
// c=Number(prompt("enter number: "));
// console.log(typeof(c));
// console.log(!true);

//control statement
//  1.conditional control statement.(if, else, else if, switch)
//  2.loop control statement..(for, while, do while)
//if-else statement..
// var x=5;
// if(x%2==0){
//     console.log("even");
// }else console.log("odd");

//letter grade program..

// let mark= Number(prompt("Enter Marks: "));
// if(mark>=80 && mark<=100)
//     console.log("A+");
// else if(mark>=70 && mark<80)
//     console.log("A");
// else if(mark>=60 && mark<70)
//     console.log("A-");
// else if(mark>=50 && mark<60)
//     console.log("B");
// else console.log("Fail");


// input a leter and check it is vowel or consonant.
//using switch..

// var leter = prompt("Enter later:");
// leter = leter.toLowerCase();
// switch(leter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vawel");
//         break;
//     default: console.log("consonant");
// }

//How to use for loop  in Java Script..
// for(initialization, condition, updation)
/* initialization
    while(condition){
        uptation;
    }   */
/* initialization;
    do{
        updation;
    }while(condition);  */
// var sum = 0;
// for(let a=1; a<=5; ++a){
//     console.log(a);
//     sum = sum+a;
// }
// console.log(sum);
// var sum = 0;
// var a = 1;

// while(a<=100){
//    if(a%3==0 && a%5==0){
//         sum = sum+a;
//         console.log(a);
//     }
//     ++a;
// }
// console.log(sum);

// for(let i=1; i<11; i++){
//     if(i==3)
        
//         break;
//     console.log(i); 
   
// }
// var i =20;
// do{
    
//     console.log(i);
//     ++i;
// }while(i<=30);

//Tarnary Operator..

// var num =Number(prompt('enter number: '));

// var result;
// result = num>0? "positive": 'negetive';
// console.log(result);

// var a=8; b=9; c=5;
// var res;
// res = a>b && a>c ? "large "+a : b>c? "large "+b: "large "+c;
// console.log(res);


// traditional function..
// var a = prompt("ha ha ha");

// function square(x){
//     x = x**2;
//     return x;
// }
// console.log(square(a));

// function squrt(a){
//     a = a**(.5);
//     console.log(a);
// }
// squrt(a);

// (function sum(a){
//     console.log(a+a);
// })(4);

// var display = function displayMessage(messege){
//     console.log(messege);
// };

// display("Hi Rowja I am Naim");

// var multiplication = function mul(a,b){
//     return a*b;

// };
// console.log(multiplication(2,6));

// Array is an object, collection of variables.

// var names = new Array(4);
// names = ["naim", "sabbir", "manik", "mobin", "tanvir"];

// console.log(names[3]);
// console.log(names[2]);

// names.push("saminur");

// console.log(names);

// names.pop();

// console.log(names);
// //how to loop an array..

// var number = [2,3,5,6,7,8,9,10];
// for(let i=0; i<8; ++i){
//     if(i==3 || i==4){
//         continue;
//     }
//     console.log(number[i]);
// }

// //how to take input an array..

// var num = new Array();
// for(let i=0; i<5; ++i){
//     num[i] = Number(prompt("number "+i+":"));
// }
// console.log(num);
// var sum=0;
// for(let i=0; i<5; i++){
//     sum = sum + num[i];
// }
// console.log(sum);

//Array library method...
// var number = [2,3,4,5,6];
// console.log(number);

// console.log(number.shift());
// console.log(number);
// number.unshift(2);
// console.log(number);

// number.splice(2,0,8,9);
// console.log(number);

// var num2 = number.slice(4);
// console.log(num2);
// var num3 = number.slice(1,3);
// console.log(num3);
// var text ="rowja";
// // console.log(text.slice(1,3));

// var alpha = ["d","b","c","a"];
// var sorted_alpha = alpha.sort();
// console.log(sorted_alpha);

// console.log(alpha.reverse());

// //number sorting..

// var Num = [3,5,2,1,6,7,4,8];

// Num.sort((a,b)=>{
//     return a-b;
// })
// console.log(Num);

// // two dimensional array..


// // Example using one dimensional array...

// var score = [];

// for(let i=0; i<4; i++){
//     score[i] = prompt("Enter score: ");
// }
// for(let i=0; i<4; i++){
//     console.log(score[i]);
// }
// console.log(score);

// function htscore(a){
//     var  max = a[0];
//     for(let i=0; i<4; i++){
      
//         if(max<a[i]){
//             max = a[i];
//         }
//     }
//     return max;
// }
// console.log(htscore(score));

// //Example using two dimensional array..

// var playerInfo = [["tamim",100],["sakib",87],["mushfiq", 59],["mehedi",124]];

// for(let i=0; i<4; i++){//for row
//     for(let j=0; j<2; j++){//for column
//         console.log(playerInfo[i][j]);
//     }
// }
// document.getElementById("demo").innerHTML = playerInfo;

// function highestScore(a){
//     var highestScorer = a[0][0];
//     var highestScor = a[0][1];

//     for(let i=0; i<a.length; i++){
      
//             if(highestScor < a[i][1]){
//                 highestScor = a[i][1];
//                 highestScorer = a[i][0]
//             }
        
//     }
//     return highestScorer;
// }
// console.log(" ");
// var result = highestScore(playerInfo);
// console.log(result);
// document.getElementById("demo1").innerHTML = result;


//another example...

//looping an array...
// const fruits = ["banana","aple","mango","pinaple"];

// let fLen = fruits.length;
// let tex = "<ul>";
// for(let i=0; i<fLen; i++){
//     tex += "<li>"+ fruits[i] +"</li>";
// }
// tex += "</ul>";

// console.log(tex);
// document.getElementById("demo3").innerHTML = tex;

//looping an array using forEach()...

// const fruits = ["banana","aple","mango","pinaple"];

// let tex ="<ul>";
// fruits.forEach(myfunction);
// tex += "</ul>";

// function myfunction(value){
//     tex += "<li>"+ value +"</li>";
// }
// document.getElementById("demo1").innerHTML = tex;
// console.log(fruits.at(-2));
// console.log(fruits.join(" "));
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.push("amla"));
// console.log(fruits);
// // console.log(fruits.concat("lemon"));
// // console.log(fruits.push("lemon"));
// console.log(fruits.copyWithin(1,0,2));

// console.log(fruits.flat());
// // console.log(fruits.flatMap(x => [x+x]));
// console.log(fruits.toSpliced(1,0,"kul"));
// console.log(fruits);

// fruits.splice(1,0,"coconut","olive");
// console.log(fruits);

// // console.log(fruits.slice(2));
// console.log(fruits.slice(2));
// console.log(fruits);

//array sorting..

// * numeric sort.
// * Math.min.apply() *Math.max.apply()

// const Num = [2,6,1,5,8,9,4,3,13,23];
// document.getElementById("demo").innerHTML=  Num;
// function fun1(){
//     Num.sort();
//     document.getElementById("demo1").innerHTML = Num;
// }
// function fun2(){
//     const newNum = Num.toSorted((a,b)=>{return a-b});
//     document.getElementById("demo2").innerHTML=newNum;
// }
// function fun3(){
//     const newNumDecending = Num.toSorted((a,b)=>{return b-a});
//     document.getElementById("demo3").innerHTML = newNumDecending;
// }



// console.log(Math.max.apply(null, Num));
// console.log(Math.min.apply(null, Num));

// const Num2 = Num.map((x)=>{return x*x});
// console.log(Num2);

// var newA = "";
// Num.forEach(myFunc);
// console.log(newA);
// function myFunc(x){
//     // newA += x*x +" ";
//     // return newA;
//     // console.log(x);
// }

// const newArr = Num.flatMap(myfunc1);
// function myfunc1(value,index,array){
//     return [value, value*2];
// }
// console.log(newArr);

// var newArr1 = Num.filter((x)=>{if(x%2!=0){return x;}});
// console.log(newArr1);

// const Num =[2,6,3,8,4,9];

// Num.forEach(function(x,index,array){
//     array[index] = x*3;
// })
// console.log(Num);

// console.log(3%9);
// var Name = "Naim";
// console.log(`Hi I am ${Name}`);

// x=20;
// if(true){
//     y=10;
//     console.log(`y = ${y}`);
// }var y;
// console.log(x);
// var x;
// //default parameter.
// function messege(txt = 3){
//     console.log(`${txt*txt}`);
// }
// messege(4);

// //rest parameter..

// function sum(x,y,...z){
//     console.log(`x=${x}, y=${y}, z=${z}`);
//     console.log(`sum = ${x+y+Number(z)}`);
// }
// var number = [2,3,4];
// sum(...number);

// let p1 ={
//     name: "Naimul Islam",
//     age: 25,
//     body1(){
//         return "Hi";
//     }
// }
// let p2 ={
//     nationality:"Bangladeshi",
//     proffession: "Student",
//     'body name'(){
//         return "Hi I am Naim";
//     }
// }

// console.log(p2['body name']());
// console.log(p1.body1());
// let p = {...p1,...p2};
// console.log(p);

// const name = ["naim","sabbir","manik"];
// for(let nam of name){
//     console.log(nam);
// }
// for(let x in p){
//     console.log(p[x]);
// }

// document.getElementById("demo").innerHTML = "<h2>for changing HTML element.</h2>";
// document.getElementById("demo").innerText = "using innerText.";
// document.write(5+5);
// window.alert(5+6);

//Math Object.....
// console.log(Math.sqrt(9));
// console.log(Math.abs(-4));
// console.log(Math.sin(3.1415/4));
// console.log(Math.cos(22/14));
// console.log(Math.tan(0));
// console.log(Math.pow(4,3));
// console.log(Math.floor(3.6));
// console.log(Math.ceil(4.3));
// console.log(Math.round(4.3));
// console.log(Math.max(3,4,2,1,7,9,8));
// console.log(Math.min(4,3,2,7,5,1));
// console.log(Math.random());

//now make a guessing game...

// var numOfwin = 0;
// var numOflose = 0;
// let x=0;
// while(x<6){
//     var num1 = prompt("Enter a number: ");
//     var num2 = Math.floor(Math.random()*4)+1;

//     if(num1==num2){
//         console.log("You win");
//         numOfwin++;
//     }else{
//         console.log("you lost! the random number is "+num2);
//         numOflose++;
//     }
//     x++;
// }
// document.getElementById("demo4").innerHTML= "Number of win "+  numOfwin+ " times";
//document.querySelector("demo5").innerHTML= "Number of lost "+ numOflose+ " times";

// var date = new Date();

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());//sun-0,mon-1,tues-2,wed-3,thurs-4,fri-5,satur-6
// console.log(date.getMonth());//start from 0 index.
// console.log(date.getHours());
// console.log(date.getMinutes()); 
// // var text = "Naim";
// // document.querySelector("demo6").innerHTML = text;

// const person = {};

// person.Name = "Naim";
// person.age = "25";
// person.eyecolor = "Black";

// console.log(person);

// var a = Object.values(person);
// console.log(a);
// console.log(typeof(a));
// var b = Object.entries(person);
// console.log(b);

// // adding a constructor function..

// function student(name,age,id){
//     this.Name = name;
//     this.age = age;
//     this.id = id;
//     this.disp = ()=>{
//         console.log(this.Name);
//         console.log(this.age);
//         console.log(this.id);
//     }
// }

// var std1 = new student("Naim", 25, 1002);
// var std2 = new student("Sabbir", 23, 1001);

// std1.disp();
// std2.disp();
// console.log(std2.Name);
// console.log(std1);
// console.log(std2);

// var x = document.querySelector("demo6");
// var y = document.querySelector("btn4");

// function forClick(val){
//     console.log(val);
//      x.innerTEXT = val;
    
// }

// var Name = "Naim";
// var Part = Name.slice(1,3);
// console.log(Part);
// console.log(Name);

// var a = new String(Name);
// console.log(a);
// console.log(a[1]);
// var b = Name.split("");
// console.log(b);

// console.log(b.includes("a"));
// console.log(Name.includes("a"));

// var x = "Na";
// console.log(x.slice(-4,-1));

// let padded = x.padStart(4,"0");
// console.log(padded);
// console.log(x.padEnd(5,"@"));
// console.log(x.repeat(6));
// console.log(x.replace("a","A"));

// let Text = "Please locate where 'locate' occurs!";
// console.log(Text.indexOf("locate"));
// console.log(Text.lastIndexOf("locate"));
// console.log(Text.search("where"));

// let y = 123;
// let c = y.toString();
// console.log(typeof(c));
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(4));
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN); // RETURNS THFE NATURAL LOGARITHM OF 2...
// console.log(Math.LN10); // returns the natural logaritnm of 100...
// console.log(Math.LOG2E); //returns base 2 logarithm of E..
// console.log(Math.LOG10E); // returns base 10 logarithm of E..
// console.log(Math.trunc(9.2234));
// console.log(Math.ceil(-4.2));

// var text="" ;
// for(let i=0; i<5; i++){
//     text =text+ "The number is "+ i + "<br>";
// }
// document.getElementById("demo6").innerHTML = text;
// console.log((23330).toExponential());

// var newArray = [2,4,5,3];
// console.log(newArray.at(-2));
// console.log(newArray.slice(0,-2));

//PROBLEM SOLVING / PROBLEM SOLVING / PROBLEM SOLVING

//জোড় ও বিজোড়-১
//কোন একটি পূর্ণসংখ্যা দেওয়া থাকবে, সেটি জোড় না বিজোড় তা বের করতে হবে।

// var T = parseInt(prompt());
// console.log(T);
// for(let i=1; i<=T; i++){
//     let n = Number(prompt());
//     console.log(n);
//     if(n%2==0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }


//জোড় বিজোড় -২
// কোনো একটি পূর্ণসংখ্যা দেওয়া থাকবে, সেটি জোড় না বিজোড় তা বের করতে হবে।
// var T, n;
// T = Number(prompt());
// console.log(T);
// for(let i=1; i<=T; i++){
//     n = Number(BigInt(prompt()));
//     console.log(n);
//     if(n%2==0)
//         console.log("even");   //odd  holeo even answer dicche..
//     else
//         console.log("odd");
// }

//another process....using string...

// var T=prompt();
// for(let i = 0; i<=T; i++){
//     var n = prompt();
//     console.log(n);
//     console.log(n.length);
//     if(n.at(n.length-1)%2==0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
// }// this methode is very much efficient for a biiiiiiiig number..

//problem - 3 অধোগামী সংখ্য।।
// var count=0;
// var txt = "";
// for(let i=100; i>=1; i--){
//     count++;
//     console.log(i);
//     txt += i + " "+" "+" "+" ";
    
//     if(count%5==0){
//         console.log('\n');
//         // document.getElementById("demo6").innerHTML = txt+i+"</br>";
//         txt += i + "<br>";
//     }
// }
// document.getElementById("demo6").innerHTML = txt;


//problem - 4 ভাজক

// একটি সংখ্যার সব গুণনীয়ক(ভাজক) বের করতে হবে।
// var T = Number(prompt());

// for(let i=1; i<=T; i++){
//     var n = Number(prompt());
//     console.log(`case ${i} for ${n}: `);
//     for(let j=1; j<=n; j++){
//         if(n%j==0){
//            console.log(j+" ");
//         }
//     }
// }

//problem - 5 বাক্স-১                     "Solve হয়নি।"
// var T = Number(prompt());
// var txt = "";
// var count = 0;
// for(let i=1; i<=T; i++){
//     var n = Number(prompt());
//     myFunction(n);
//     count++;
// }

// function myFunction(n){
//     for(let j=1; j<=n; j++){
//         if(count++ == true){
//             txt += "<br>";
//         }
//         for(let k = 1; k<=n; k++){
//             txt += "*";
//         }
       
//     }
//     document.getElementById("demo6").innerHTML = txt; 
// }


//problem - 6 যোগফল নির্ণয়  
//  ৫ অংকের একটি সংখ্যার প্রথম ও শেষের অংকের যোগফল নির্ণ্য করার প্রোগ্রাম লিখতে হবে।
// var t = prompt();
// for(let i =1; i<=t; i++){
//     let n = prompt();
//     console.log(n);
//     let sum =Number(n.at(0)) + Number(n.at(n.length-1));
//     console.log(`sum = ${sum}`);
// }

// another way to solve this promlem..
// var t=prompt();

// for(let i=1; i<=t; i++){
//     let n = prompt();
//     console.log(n);
//     let lastDigit = n%10;
//     let firstDigit,modulus;
//     while(n>=10){                 c-programming logic...
//         n=(n/10).toFixed();  
//         // modulus = n%10;
//         console.log(n);
//     }
//     firstDigit = parseInt(n);
//     console.log(lastDigit);
//     console.log(firstDigit);
//     console.log(`sum of LSD & MSD = ${lastDigit+firstDigit}`);
// }


// problem - 7  সংখ্যা গণনা।।
/* একটি লাইনে অনেক গুলো সংখ্যা দেওয়া থাকবে। সংখ্যা গুলোর মধ্যে এক বা একাধিক  
space character থাকবে। লাইনে মোট কতটি সংখ্যা আছে তা বের করতে হবে।*/

// var t=prompt();
// for(let i=1; i<=t; i++){
//     let n = prompt();
//     let nArr = n.split("");
//     console.log(n);
//     console.log(nArr);
//     let j=0;
//     let count=0;
//     while(j<=nArr.length-1){
//         if(nArr[j]==" "){
//             count++
//         }
//         j++;
//     }
//     console.log(count+1);
// }

//problem - 8 ছোট থেকে বড়।।
// তিনটি পৃথক সংখ্যা দেওয়া থাকবে ।। এদেরকে ছোট থেকে বড় আকারে সাজাতে হবে।

// var t = prompt();

// for(let i = 1; i<=t; i++){
//     let n = prompt();
//     let nArr = n.split(" "); //when taking input, give space between each input.
//     console.log(nArr);
//     nArr.sort((a,b)=>{
//         return a-b;
//     });
//     console.log(nArr);
// }

//problem - 9 পূর্ণবর্গ সংখ্যা...
// একটি সংখ্যা পুর্ণবর্গ কি না সেটি বের করার প্রোগ্রাম লিখতে হবে।।

// var t = prompt(); //case number..
// for(let i=1; i<=t; i++){
//     let n = prompt();
//     let root = Math.trunc(Math.sqrt(n));
//     if(root * root == n){
//         console.log('parfect square');
//     }else{
//         console.log('not perfect square');
//     }
// }
//  another process..
// var t = prompt();
// for(let i = 1; i<=t; i++){
//     let n = prompt();
//     let sq_root = Math.sqrt(n);
//     if(Math.ceil(sq_root)==Math.floor(sq_root))
//         console.log("perfect square");
//     else
//         console.log("not perfect square");
// }

// problem - 10 রানরেট -১
// প্রতিপক্ষের রান r1, বর্তমান ব্যাটস ম্যানদের রান r2,  বল বাকি আছে B.
//এই information থেকে current run rate & required run rate বের কর।

// var t=prompt();
// for(let i=1; i<=t; i++){
//     let inp = prompt("targated_run present_run Ball_is_left:");   //give space between each value when taking Input;
//     let nArr = inp.split(" ");
//     console.log(nArr);
//     let ball_played = 300 - nArr[2];
//     let current_runrate = (nArr[1]/ball_played)*6;
//     let required_runrate = ((nArr[0]-nArr[1]+1)/ nArr[2])*6;
//     console.log(`Current Run Rate: ${current_runrate}`);
//     console.log(`Required Run Rate: ${required_runrate}`);
// }// runrate নির্ণয় করার প্রোগ্রাম।।


//problem - 11 - factorial..
// যেকোন সংখ্যার ফ্যাকটোরিয়াল বের করতে হবে...
// var T = prompt();
// for(let i=1; i<=T; i++){
//     let n = prompt();
//     let fact = 1;
//     for(let j=2; j<=n; j++){
//          fact = fact * j;

//     }
//     console.log(`the ${n} factotial is = ${fact}`);
// }

// problem - 12- factorial of large number(100,200,300....)
//Calculating the factorial of large numbers (like 100, 200, or 300) in 
// JavaScript can be challenging due to the limitations of the language's 
// number representation.For larger numbers, you can use the BigInt type, 
// which allows you to work with arbitrarily large integers.
// var T = prompt();
// function factorial(n){// determination of factorial..
//     if(n===0 || n===1){
//         return BigInt(1);
//     }else{
//         let result = BigInt(1);
//         for(let i=2; i<=n; i++){
//             result *= BigInt(i);
//         }
//         return result;
//     }
// }
// function zero_count(result){// zero count for the factorial..
//     let zero_Count = 0;
//         while(result%10n==0){
//             result /= 10n;
//             zero_Count++;
//         }
//         return zero_Count;
// }
// for(let i=1; i<=T; i++){
//     let number = prompt();
//     let fact = factorial(BigInt(number))
//     console.log(fact.toString());
//     let ZeroCount = zero_count(fact);
//     console.log(ZeroCount.toString());
// }

//problem - 13 - টমি মিয়ার প্রোবালিটি...

//most important program.. you need to access this..

//  var T = prompt();
//  for(let i=1; i<=T; i++){
//     let sentence = prompt();  // a English sectence as a input..
//     let newArr = sentence.toLowerCase().split(" ");
//     console.log(newArr);
//     console.log(sameCount(newArr));
//     const samecount_object = sameCount(newArr);
//     let denominator = 1
//     for (let y in samecount_object){
//         denominator *= fact(samecount_object[y]);
//     }
//     let permutation = (fact(newArr.length))/((denominator));
//     console.log(permutation);
//     let probability = 1/permutation;
//     console.log(probability);
//  }

//  function sameCount(arr){
//     const sameWordCount = {};
//     for(let x of arr){
//         if(sameWordCount[x]){
//             sameWordCount[x]++;
//         }else{
//             sameWordCount[x] = 1;
//         }
//     }
//    return sameWordCount;
//  }
 
//  function fact(n){
//     let fac = 1;
//     for(let i=2; i<=n; i++){
//         fac = fac*i;
//     }
//     return fac;
//  }

// extra problem using array word frequency count..

// var t=prompt();
// for(let i=1; i<=t; i++){
//     let inputText = prompt();
//     console.log(wordCountof(inputText));
// }
// function wordCountof(sentence){
//     const newArr = sentence.toLowerCase().split(" ");

//     const wordCount = [];
        
//         for(const word of newArr){

//             let found = false;

//             for(const pair of wordCount){
//                 if(pair[0] === word){
//                     pair[1]++;
//                     found = true;
//                     break;
//                 }
//             }
//          if(!found){
//                   wordCount.push([word, 1]);                }
//         }
//        
//     return wordCount;
// }

// iteration using object..

// function wordCount(sentence){
//     const words = sentence.toLowerCase().split(" ");
//     const sameWordCount = {};

//     for(let word of words){
//         if(sameWordCount[word]){
//             sameWordCount[word]++;
//         }else{
//             sameWordCount[word] = 1;
//         }
//     }
//     return sameWordCount;
// }
// const sentence = prompt();
// console.log(wordCount(sentence));

//find first even number...
// function findFirstEven(numbers) {
//     let foundEven = false; // Flag to track if an even number is found
//     let firstEven = null;
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             foundEven = true; // Set the flag to true
//             firstEven = number;
//             break; // Exit the loop early
//         }
//     }
//     if (foundEven) {
//         return firstEven;
//     } else {
//         return "No even number found";
//     }
// }

// const numbers = [1, 3,4, 5, 7,8, 9];
// console.log(findFirstEven(numbers)); // 8


//problem - 14 - অক্ষরের ঘনঘটা।
// এমন একটি প্রোগ্রাম লিখতে হবে যেটি একটি বাক্যে কোনো একটি বিশেষ বর্ণ কতোবার 
//আছে তা প্রিন্ট করবে...

// const inputText = prompt();
// const speacial_char = prompt();
// let count = 0;
// const TextArr = inputText.toLowerCase().split("");
// for(let x of TextArr){
//     if(speacial_char === x){
//         count++;
//     }
// }
// if(count){
//     console.log(`Occurrence of "${speacial_char}" in "${inputText}" = ${count}`);
// }else{
//     console.log(`"${speacial_char}" is not present`);
// }

//problem - 15 - অক্ষর গণনা...।
//এমন একটি প্রোগ্রাম লিখতে হবে বাক্যে সবগুলো বর্ণ (alphabet) কতবার করে এসেছে
//সেটি প্রিন্ট করবে।।

// this problem solve using object..
//  const Text = prompt();
//  const newArr = Text.toLowerCase().split("");
//  console.log(Text);
//  const countObj = {};
//  for(let x of newArr){
//     if(countObj[x]){
//         countObj[x]++;
//     }else{
//         countObj[x] = 1;
//     }
    
//  }
//  for(let y in countObj){
//     console.log(`${y} : ${countObj[y]}`);
//  }
 
// same problem using array..
// const Text = prompt();
// const newArr = Text.toLowerCase().split("");
// console.log(Text);
// const letterCount = [];
// for(let x of newArr){
//     let found = false;
//     for(let letter of letterCount){
//         if(letter[0] === x){
//             letter[1]++
//             found = true;
//             break;
//         }
//     }
//     if(!found){
//         letterCount.push([x,1]);
//     }
// }
// console.log(letterCount);
// for(let x of letterCount){
  
//     console.log(`${x[0]} : ${x[1]}`);
   
// }


//solution using ucicode...
// এই code টী java script দিয়ে রান হচ্ছে না...

// let x = "alif";
// console.log(x.charCodeAt(0));

// const txt = prompt();
// const letter = txt.toLowerCase().split("");
// const character = [];

// for(let i = 0; i<txt.length; i++){
//     if(txt[i]>= "a" && txt[i]<="z"){
//         character[txt.charCodeAt(i) - 97]++;
//     }
// }
// console.log(character);
// for(let i =0; i<26; i++){
//     if(character[i]!=0){
//         console.log(`${String.fromCharCode(97+i)} : ${character[i]}`);
//     }
// }

//problem - 16 - শব্দ বিপর্'যয়...।
//এমন একটি প্রোগ্রাম লিখতে হবে, যেটি বাক্যের সবগুলো শব্দকে ঊল্টো করে দেখাবে।।

// const txt = prompt();
// const words = txt.split(" ");
// console.log(words);


// const newWordArr = [];

// for(let word of words){
//     newWordArr.push(reverseWord(word));
//     console.log(reverseWord(word));
// }

// function reverseWord(word){
//     // const newWord = [];
//     const wordArr = word.split("");

//    // one way of reversing..
//     // for(let i = wordArr.length-1; i>=0; i--){
//     //     newWord.push(wordArr[i]);
       
//     // }
//     // another way of reversing...
//     const newWord = wordArr.reverse();

//     return newWord.join("");
// }
// console.log(newWordArr.join(" "));



// This same program using Map()...

// const inputSentence = prompt();
// const reversed_sen = reverseSentence(inputSentence);

// function reverseSentence(sentence){
//     const words = sentence.split(" ");
//     const reversedWord = words.map((word)=>{
//        return word.split("").reverse().join("");
//     });
//     const reversed_sentence = reversedWord.join(" ");
//     return reversed_sentence;
// }
// console.log("input sentence: ",inputSentence);
// console.log("output reversed sentence: "+ reversed_sen);



// This same program using forEach()...

// const inputSentence = prompt();
// const reversed_sen = reverseSentence(inputSentence);

// function reverseSentence(sentence){
//     const words = sentence.split(" ");
//     const reversed_sentence = [];
//     words.forEach(word => {
//        reversed_sentence.push(word.split("").reverse().join(""));
//     });
//     return reversed_sentence.join(" ");
// }

// console.log("input sentence: ",inputSentence);
// console.log("output reversed sentence: "+ reversed_sen);


//problem - 17- স্বরবর্ণ গণনা...
//এমন একটি প্রোগ্রাম লিখতে হবে, যেটি একটি বাক্যে কতগুলো স্বরবর্ণ বা vowel আছে সেটি গণনা করবে...
// const input_sentence = prompt();

// function vowel_count(sentence){
//     let count = 0;
//     const letter = sentence.split("");
//     letter.forEach((x)=>{
//         if(x == "a"||x=="i"||x=="e"||x=="o"||x=="u"){
//             count++;
//         }
       
//     });
//     return count;
// }
// console.log(`number of vowel = ${vowel_count(input_sentence)}`)

//problem - 18 -স্বরবর্ণ - ব্যাঙ্গনবর্ণ
//এমন একটি প্রোগ্রাম লিখতে হবে যেটি একটি বাক্যে অবস্থিত vowel & consonent কে 
//আলাদা ভাবে প্রিন্ট করবে...

// const input_sentence = prompt();
// const output = vowel_idetifier(input_sentence);

// function vowel_idetifier(sentence){
//     const sentence_Arr = sentence.split("");
//     const Consonent = [];
//     const Vowel = [];
//     sentence_Arr.forEach(((letter)=>{
//         if(letter == "a" || letter == "i" || letter =="e" || 
//             letter == "o" || letter =="u"){
//             Vowel.push(letter);
//         }else{
//             if(letter !== " "){
//                 Consonent.push(letter);
//             }
//         }
//     }));
//     return [Vowel.join(""),Consonent.join("")];
//     //return multiple value using array, object, distructuring...
   
// }

// console.log(output[0]);
// console.log(output[1]);

//problem - 19 - শব্দ গণনা - ১
//একটি বাক্যে অবস্থিত শব্দগুলোর মধ্যকার space হিসাব করে মোট শব্দ কতগুলো আছে 
// সেটি বের করার প্রোগ্রাম লিখতে হবে...
// const input = prompt();
// const word = input.split(" ");
// console.log(word.length);

//problem - 20 - শব্দ গণনা - ২
//একটি বাক্যে কতগুলো শব্দ আছে সেটি বের করার প্রোগ্রাম লিখতে হবে। দুটি শব্দের মধ্যে
//যেকোনো যতি চিহ্ন থাকতে পারে। অর্থাৎ দুটি শব্দের মধ্যে space character ছারাও কমা,
//সেমিকোলন ইত্যাদি থাকতে পারে...
// const input = prompt();
// const clean_sentence = input.replace(/[,.:!?]/g," ");
// const words = clean_sentence.replace(/\s\s/g," ").trim();

// know about RegExp(regular expression).

// const word = words.split(" ");
// console.log(word.length);

//problem - 21 - উলটে দেখা
// এমন একটি প্রোগ্রাম লিখ, যেটি একটি শব্দকে উল্টো করে দেখাবে...
// const input_word = prompt();
// const output_word = reverseWord(input_word);
// console.log(output_word);
// function reverseWord(word){
//     const letter = word.split("");
//     const revletter = [];
//     letter.forEach((x)=>{
//         revletter.unshift(x);
//     })
//     return revletter.join("");
// }

//problem - 22 - মৌলিক সংখ্যা...
// একটি নির্দিষ্ট সীমা পর্যন্ত মৌলিক সংখ্যা নির্ণয় করতে হবে...

// const limit_of_prime_num = Number(prompt());
// const PrimeNumber = primeNumber(limit_of_prime_num);
// console.log(PrimeNumber);

// function isPrime(n){
//     if(n<2) return false;
//     for(let i = 2; i<=Math.sqrt(n); i++){
//         if(n%i == 0){
//             return false;
//         }
//     }
//     return true;
// }

// function primeNumber(limit){
//     const prime_number = [];
//    for(let i = 0; i<=limit; i++){
//         if(isPrime(i)){
//             prime_number.push(i);
//         }
//    }
//     return prime_number;
// }

//same program another methode ...Sieve of Eratosthenes algrithm..
// function findPrimesUpTo(limit) {
//     // Create a boolean array to mark primes
//     let isPrime = new Array(limit + 1).fill(true);

//     // 0 and 1 are not prime numbers
//     isPrime[0] = isPrime[1] = false;

//     // Iterate through the numbers
//     for (let i = 2; i * i <= limit; i++) {
//         if (isPrime[i]) {
//             // Mark multiples of i as non-prime
//             for (let j = i * i; j <= limit; j += i) {
//                 isPrime[j] = false;
//             }
//         }
//     }

//     // Collect all prime numbers
//     const primes = [];
//     for (let i = 2; i <= limit; i++) {
//         if (isPrime[i]) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// // Example usage
// const limit = Number(prompt());
// const primes = findPrimesUpTo(limit);
// console.log(`Prime numbers up to ${limit}:`, primes);



//problem - 23 - বর্ণমালা থেকে সংখ্যা।।
// a=1,b=2,c=3,....বিবেচনা করে এমন একটি প্রোগ্রাম লেখ যেটি একটি বর্ণগুচ্ছকে 
//সাংখ্যিক গুচ্ছে রুপান্তর করবে...
// const input = prompt();
// const output = transformLeterToNum(input.toLowerCase());

// function transformLeterToNum (word){
//     const num = [];
//     for(let i = 0; i<word.length; i++){
//         if(word[i] >= "a" && word[i] <="z"){
//             num.push(word.charCodeAt(i) - "96");
//         }
//     }
//    return num.join("");
// }
// console.log(output);


//problem - 23 - একান্তর উপাদান...
//একটি array-এর উপাদাগুলো থেকে একান্তর উপাদান (Alternate elements) বের করার
//প্রোগ্রাম লিখতে হবে...

// const T = prompt();
// for(let i = 1; i<=T; i++){
//     const arrLength = Number(prompt());
//     const arrElement = [];
//     for(let x = 0 ; x < arrLength; x++){
//         let element=prompt();
//         arrElement[x] = element;
//     }
//     console.log(arrElement);
//     console.log(AlternateElements(arrElement));
// }

// function AlternateElements(arr){
//     const AlternateArr = [];
//     for(let x = 0; x<arr.length; x++){ // this can do also by changing increment..
//         if(x%2 == 0){
//             AlternateArr.push(arr[x]);
//         }
//     }
//     return AlternateArr;
// }


//problem -25 - ল সা গু।

// const input1 = Number(prompt());
// const input2 = Number(prompt());
// var gcd = gcd(input1,input2);
// console.log(gcd);

// function gcd(a,b){
//     while(b!=0){
//         let temp = b;
//         b = a%b;
//         a = temp;
        
//     }
//     return  a;
// }
// const lcm = (input1*input2)/gcd;
// console.log(lcm);

// GCD using recursion..
// function gcd(a, b) {
//     // Base case: if b is 0, return a
//     if (b === 0) {
//         return a;
//     }
//     // Recursive case: call gcd with b and the remainder of a / b
//     return gcd(b, a % b);
// }

// // Example usage
// const nu1 = 12;
// const nu2 = 8;
// const result = gcd(nu1, nu2);
// console.log(`GCD of ${nu1} and ${nu2} is:`, result);

//If you need to find the GCD of more than two numbers,
//  you can repeatedly apply the GCD function

// function gcdOfArray(numbers) {
//     return numbers.reduce((a, b) => gcd(a, b)); //here gcd function needed..
// }

// // Example usage
// const numbers = [24, 36, 60];
// const result = gcdOfArray(numbers);
// console.log(`GCD of [${numbers}] is:`, result);



//problem - 26 -এলিয়েন গুপী...

// const T = prompt();

// for(let i=1; i<=T; i++){
//     var AmountOfFood = prompt();
//     console.log(AmountOfFood + ' kg');
//     let count = 0;
//     while(AmountOfFood>1){
//         AmountOfFood = AmountOfFood/2;
//         count++
//     }
   
//     console.log(count + ' days');
// }


//problem - 27 - armstrong number..cheaker..

// function isArmstrong(n){

//     let digitCount = n.toString().split("").length;
//     let temp = n;
//     let result = 0;
//     let digit;
//     while(temp!=0){
        
//         digit = temp%10;
//         result += Math.pow(digit,digitCount);
//         temp = Math.trunc(temp/10);
//     }
//     if(result == n){
//         return true;
//     }else{
//         return false;
//     }
// }
// var eT = prompt(); // armstrong cheaker segment..
// whil(T--){
//     const input = prompt();
//     if(isArmstrong(input)){
//         console.log(`${input} is Armstrong number.`);
//     }else{
//         console.log(`${input} is not Armstrong number!`);
//     }
    
// }
//calculate armstrong number at a range..1 to given input...
// const inp = prompt();
// const ArmStrongNumber = [];
// for(let i=1; i<=inp; i++){
//     if(isArmstrong(i)){
//         ArmStrongNumber.push(i);
//     }
// }
// console.log(ArmStrongNumber);



//problem - 28 - এলোমেলো অ্যারে...
//এমন একটি প্রোগ্রাম লিখতে হবে যেটি একটি array কোন ক্রমে সাজানো বা sorted আছে
// তা নির্ণয় করবে।

// const T = prompt();
// for(let i = 1; i<=T; i++){
//     const input = prompt();
//     const inputArr = input.split(" ");
//     if(isSorted(inputArr)){
//         console.log("YES");
//     }else{
//         console.log("NO");
//     }
// }

// function isSorted(arr){
//     let isAscending = true;
//     let isDescending = true;

//     for(let i = 0; i<arr.length-1; i++){
//         if(arr[i]>arr[i+1]){
//             isAscending = false;
//         }
//         else if(arr[i]<arr[i+1]){
//             isDescending = false;
//         }
//     }
//     return isAscending || isDescending;
// }



//problem - 29 - চিহ্ন পরিচয়।।
//এমন একটি প্রোগ্রাম লিখতে হবে যেটি একটি character upprecase, lowercase,digit
//নাকি speacial character সেটি প্রকাশ করবে...

// const T = prompt(); //for test case..
// for(let i = 1; i<=T; i++){
//     const input = prompt();
//     let checked = isChecked(input);
//     console.log(checked);
// }
// function isChecked(char){
//     if(char>="a" && char<="z"){
//         return "Lowercase Character.";
//     }else if(char>= "A" && char<="Z"){
//         return "Uppercase Character.";
//     }else if(char>= 0 && char<= 9){
//         return "Numerical Digit.";
//     }else{
//         return "Speacial Character.";
//     }
// }


//problem - 30 - যোগ্য সংখ্যা বা  perfect number..
// কোন সংখ্যার গুননীয়ক সমূহের যোগফল যদি সংখ্যাটির সমান হয় তাহলে যোগ্য সংখ্যা হবে।

// const inputNumber = prompt();
// if(isPerfect(inputNumber)){
//     console.log(`${inputNumber} is perfect.`);
// }else{
//     console.log(`${inputNumber} is not perfect.`);
// }
// function isPerfect(n){
//     const arr = [];
//     for(let i=1; i<n; i++){
//         if(n % i == 0){
//             arr.push(i);
//         }
//     }
//     let sumOfMultiple = 0;
//     for(let x of arr){
//         sumOfMultiple x;
//     }
//     if(n == sumOfMultiple){
//         return true;
//     }else{
//         return false;
//     }
// }



//problem - 31 - perfect number at a range(1-n)

//here we need to use isPerfect function...

// const range = prompt();
// for(let i = 1; i<=range; i++){
//     if(isPerfect(i)){
//         console.log(i);
//     }
// }

// function isPerfectNumber(num) {
//     if (num < 2) return false; // Perfect numbers start from 6

//     let sum = 1; // 1 is a divisor of every number
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sum += i; // Add the divisor
//             if (i !== num / i) {
//                 sum += num / i; // Add the corresponding divisor
//             }
//         }
//     }

//     return sum === num; // Check if the sum equals the number
// }

// function findPerfectNumbersInRange(n) {
//     const perfectNumbers = [];
//     for (let i = 1; i <= n; i++) {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i); // Add perfect numbers to the array
//         }
//     }
//     return perfectNumbers;
// }

// // Example usage
// const n = 100000;
// const perfectNumbers = findPerfectNumbersInRange(n);
// console.log(`Perfect numbers between 1 and ${n}:`, perfectNumbers);

// effficient methode ...Euclid Eular theorem..
// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// function findPerfectNumbersUpTo(n) {
//     const perfectNumbers = [];

//     // Iterate over possible values of p for 2^(p-1) * (2^p - 1)
//     for (let p = 2; ; p++) {
//         const mersenneCandidate = Math.pow(2, p) - 1; // 2^p - 1

//         // If the Mersenne candidate exceeds n, stop
//         if (mersenneCandidate > n) break;

//         // Check if the Mersenne candidate is prime
//         if (isPrime(mersenneCandidate)) {
//             const perfectNumber = Math.pow(2, p - 1) * mersenneCandidate;

//             // If the perfect number exceeds n, stop
//             if (perfectNumber > n) break;

//             perfectNumbers.push(perfectNumber);
//         }
//     }

//     return perfectNumbers;
// }

// // Example usage
// const n = 400000000000; // Upper limit
// const perfectNumbers = findPerfectNumbersUpTo(n);
// console.log(`Perfect numbers up to ${n}:`, perfectNumbers);



//problem - 32 - x এর গুণিতক।।
// এমন একটি প্রোগ্রাম লিখতে হবে, যেটি একটি সংখ্যা n  পর্যন্ত x -এর গুণিতক সমূহ নির্ণয় করবে।

// const T = prompt();
// for(let i=1; i<=T; i++){
//     let x = prompt();
//     let n = prompt();

//     let multiple = Multiples(x,n);
//     console.log(multiple);
// }

// function Multiples(x,n){
//     const multiple = [];
//     for(let i  = 1; i<=n; i++){
//          let multi = x * i;
//         if(multi > n){
//             break;
//         }
       
//         multiple.push(multi);
       
//     }
//     return multiple;
// }



//problem - 33 - বিভাজন সাধ্য - ১
//এমন একটি প্রোগ্রাম লিখতে হবে যেটি একটি নির্দিষ্ট সীমার অন্তভুক্ত যতগুলো সংখ্যা অপর একটি 
//পূর্ণসংখ্যা দ্বারা নিঃশেষে বিভাজ্য সেটি বের করবে।।
//প্রোগ্রামে তিনটি সংখ্যা নিব A,B,C as input...
//output এ A থেকে B পর্যন্ত যতগুলো সংখ্যা C দ্বারা বিভাজ্য সেই সংখ্যা গুলো output এ দেখাবো;
// const input = prompt();//take 3 input and keep gap between them as A B C.
// const inpArr = input.split(" ");
// console.log(inpArr);
// let a =parseInt(inpArr[0]);
// let b =Number( inpArr[1]);
// let c =Number( inpArr[2])
// for(let i = a; i<=b; i++){
//     //inpArr[0] = A & inpArr[1] = B inpArr[2] = C;
//     if(i % c == 0){
//         console.log(i);
//     }
// }


//problem - 34 - বিভাজন সাধ্য - ২...
//এমন একটি প্রোগ্রাম লিখতে হবে যেটি ১ থেকে শুরু করে একটি নির্দিষ্ট সীমার অন্তভুক্ত যতগুল
//সংখ্যা দুটি পুর্ণসংখ্যা দিয়ে নিঃশেষে বিভাজ্য সেটি বের করবে।।
// এইবার ১ থেকে c পর্যন্ত যতগুলো সংখ্যা a &  b দ্বারা নিঃশেষে বিভাজ্য তাদের দেখাবো...

// const input = prompt();//take 3 input and keep gap between them as A B C.
// const inpArr = input.split(" ");
// console.log(inpArr);
// let a =parseInt(inpArr[0]);
// let b =Number( inpArr[1]);
// let c =Number( inpArr[2])
// for(let i = 1; i<=c; i++){
//     //inpArr[0] = A & inpArr[1] = B inpArr[2] = C;
//     if(i % a == 0 && i % b == 0){
//         console.log(i);
//     }
// }

//problem - 35 - বৃত্তের বাইরে...
// একটি স্থানাংক বৃত্তের বাইরে না ভেতরে অবস্থিত , সেটি বের করার প্রোগ্রাম লিখতে হবে...
// let T = prompt();
// while(T--){
//     const center = prompt();
//     const cenArr = center.split(" ");

//     const r = Number(prompt());  //radius;

//     const givenPoint = prompt().split(" ");

//     const g = cenArr[0], f = cenArr[1];
//     const c = g*g + f*f - r*r;
//     console.log(positionOfaPoint(givenPoint[0],givenPoint[1],c));

//     function positionOfaPoint(x,y,c){
//         let equation = Math.pow(x,2) + Math.pow(y,2) -2*g*x - 2*f*y + c;
//         if(equation > 0){
//             return "outside of the cirle";
//         }
//         else if(equation <0){
//             return "inside of the circle";
//         }else{
//             return "the point is situated in the cirle";
//         }
//     }
// }


//problem - 36 - শব্দ সাজানো...
//  N - সংখ্যক শব্দকে ইংরেজি আক্ষরিক ক্রমানুসারিক(Alphabetically) সাজাতে হবে...
// manual method.
// const n = prompt();
// var words = [];
// for(let i = 1; i<=n; i++){
//     const s = prompt();
//     words.push(s);
// }
// const SortedWord = [];
// for(let i = 0; i<n; i++){
//     for(let j = i+1; j<n; j++){
//         if(words[i]>words[j]){
//             let temp = words[i];
//             words[i] = words[j];
//             words[j] = temp;
//             // SortedWord.push(words[i]);
//         }
//     }
// }
// console.log(words);

// const n = prompt();
// const words = [];
// for(let i = 0; i <n; i++){
//     words.push(prompt());
// }
// // words.sort((a,b)=>  a.localeCompare(b));
// words.sort().reverse();
// console.log(words);





//problem - 37 - সংখ্যা বিপর্যয় ...।
// এমন একটি প্রোগ্রাম লিখতে হবে যেটি একটি সংখ্যাকে উলটো ভাবে দেখাবে...

// const inputNum = prompt();
// console.log(inputNum);
// console.log(reverseNum(inputNum));
// function reverseNum(x){
//     const digit = x.split("");
//     return digit.reverse().join("");
// }


//problem - 38 - হীরক রাজ্য
//হীরক আকৃতি প্রিন্ট করবে 

// let t = prompt();
// while(t--){
//     let col = prompt();
//     let element = prompt();
//     for(let i=1; i<=col; i++){
//         for(let j=1; j<=i; j++){
//             console.log(element);
//         }
//     }
// }   //js এ pattern print করা যাচ্ছে না...


//problem - 39 - Palindrome..
// palindrome সে সব শব্দ যেটি সোজা বা উলটা যেভাবে পড়া হক না কেনো একই থাকে...

// const word = prompt();
// console.log(word);
// console.log(isPalindrome(word));

// function isPalindrome(x){
//     const wordArr = x.split("");
//     const wordRev = wordArr.reverse().join("");
//     if(x == wordRev){
//         return "palindrome";
//     }else{
//         return "not palindrome";
//     }
// }



//problem - 40- ধারার যোগফল -১
//x0 + x1 + x2 + x3 + x4 + ..... + xk [here 1,2,3,....k is the power of x]
// x<=10 & k<=6..

// let T = prompt();
// while(T--){
//     const x = Number(prompt());
//     const k = Number(prompt());
//     let sum = 0;
//     for(let i = 0; i<=k; i++){
//         sum += Math.pow(x,i);
//     }
//     console.log("Result = ",sum);
// }



//problem - 41 - ধারার যোগফল ২
// (1/1!)+(2/2!)+(3/3!)+(4/4!)+........+(n/n!) এই ধারার যোগফল বের করতে হবে...

// let T = prompt();
// while(T--){
//     const n = prompt();
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += (i/factorial(i));
//     }
//     console.log(sum);
// }

// function factorial(x){
//     let fact = 1;
//     for(let i=1; i<=x; i++){
//         fact *= i;
//     }
//     return fact;
// }



// problem - 42 - ধারার যোগফল -৩
// summation( k=0 to k=n )2 to the power k
//2^0 + 2^1 +2^2 + 2^3 + ...... + 2^k o/p.
// let T = prompt();
// while(T--){
//     const n = prompt();
//     let sum="";
//     for(let i=n; i>=0; i--){
//         if(i==0){
//             sum += 1;
//             break;
//         }else if(i==1){
//             sum += "2"+" + ";
//             continue;
//         }
//         sum += "2^"+i +" + ";
//     }
//     console.log(sum);
// }



//problem - 43 - হিসাব কিতাব...
// p^q mod c er মান নির্ণয় করার প্রোগ্রাম লিখতে হবে...
// let T = prompt();
// while(T--){
//     let input = prompt().split(" ");
//     console.log(input);
//     let result = Math.pow(input[0],input[1]) % input[2];
//     console.log("Result = "+ result);
// }


//problem - 44 - প্যাসকেলের ত্রিভুজ -১
// (a + b)^n এর বিস্তৃতিতে পদ সংখ্যা n+1.   n = 0,1,2,3,4....

// const even = [], odd =[];
// const n = prompt();
// even[0] = 1; even[1] = 1;

// for(let i = 3; i<=n; i++){
//     if(i%2 == 0){
//         let j=1;
//         for(; j<i-1; j++){
//             even[j] = odd[j] + odd[j-1]; 
//         }
//         even[j] =1;
//         console.log(j);
//     }
//     else{
//         odd[0] = 1;
//         let j=1;
//         for(; j<i-1; j++){
//             odd[j] = even[j-1] + even[j]; 
//         }
//         odd[j] = 1;
//         console.log(j);
//     }
// }
// if(n%2==0){
//     console.log(even);
// }else{
//     console.log(odd);
// }

// const n = parseInt(prompt("Enter the number of rows:"));
// const triangle = [];

// for (let i = 0; i < n; i++) {
//     triangle[i] = [];
//     triangle[i][0] = 1; // First element is always 1

//     for (let j = 1; j < i; j++) {
//         triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//     }

//     if (i > 0) {
//         triangle[i][i] = 1; // Last element is always 1
//     }
// }

// // Print the triangle
// for (let i = 0; i < n; i++) {
//     console.log(triangle[i]);
// }


//problem- 45 - pascal triangle 2D array methode...


// function printPascalsTriangle(rows) {
//     const triangle = [];

//     // Generate Pascal's Triangle
//     for (let i = 0; i < rows; i++) {
//         triangle[i] = [];
//         triangle[i][0] = 1; // First element is always 1
//         triangle[i][i] = 1; // Last element is always 1

//         // Fill in the middle elements
//         for (let j = 1; j < i; j++) {
//             triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
//         }
//     }

//     // Print Pascal's Triangle
//     for (let i = 0; i < rows; i++) {
//         let spaces = " ".repeat(rows - i - 1); // Add spaces for alignment
//         let row = triangle[i].join(" "); // Convert row to a string
//         console.log(spaces + row); // Print the row
//     }
// }

// // Example usage
// printPascalsTriangle(5);


//problem - 46 - ত্রিভূজের ক্ষেত্রফল।।
// তিন টি বাহু a, b, c. and অর্ধপরিসীমা s = (a+b+c)/2;
//area A = sqrt(s(s-a)*(s-b)*(s-c));

// const input = prompt().split(" ");
// const a =  Number(input[0]), b =  Number(input[1]), c =  Number(input[2]);
// const s =(a+b+c)/2;

// const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(area);


//problem - 47 - আরের জোট
//দুটি ছোট থেকে বড় ক্রমে সাজানো আরে দেওয়া থাকবে । আরে দুটি কে যুক্ত করে একটি 
// ক্রমানুসারে সাজানো আরে তৈরি করতে হবে...
// let T = prompt();
// while(T--){
//     const ArrOne = prompt().split(" ");
//     console.log(ArrOne);
//     const ArrTwo = prompt().split(" ");
//     console.log(ArrTwo);
//     const newArr = ArrOne.concat(ArrTwo).sort((a,b)=> {
//         return a-b;
//     });
//     console.log(newArr);
// }


//problem  -48 - নিখজ সংখ্যা ।।
// একটি আরেতে ১ থেকে  শুরু করে n পর্যন্ত যতগুলো সংখ্যা আছে তার একটি বাদে সবগুলো 
//সংখ্যা দেওয়া থাকবে। কোন উপাদানটি অনুপস্থিত সেটি বলতে হবে...
// let T = prompt();
// while(T--){
//     const limit = prompt();
//     const GivenArr = prompt().split(" ");
//     console.log(GivenArr);
//     const missing = [];
//     for(let i = 1; i<=limit; i++){
//         let found = 0;
//         if(!GivenArr.includes(`${i}`)){
//             found++;
//             missing.push(i);
//         }
//     }
//     console.log(missing.join(" "));
// }

//problem - 49 - মৌলিক কি না।।
// একটি সংখ্যা মৌলিক কিনা বের করতে হবে। 
// let T= prompt();
// while(T--){
//     const Number = prompt();
   
//     if(isPrime(Number)){
//        console.log( `${Number} is  prime`);
//     }else{
//         console.log(`${Number} is not prime`);
//     }
// }
// function isPrime(x){
//     if(x == 2) return true;
//     for(let i = 2; i<x; i++){
//         if(x%i==0){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }

//problem  - 50 - লেফট রাইট।।
// 34R92L6 L- replace by left character & R- replace by right character 
// 3499226 like this..

// let T = prompt();
// while(T--){
//     const GivenStr = prompt();
//     console.log(GivenStr);
//     // let Result = LeftRight(GivenStr);
//     // console.log(Result);
//     console.log(UsingNotArr(GivenStr));
// }
// function LeftRight(x){
//     let newTxt = x.split("");
//     for(let i = 0; i<newTxt.length; i++){
//         if(newTxt[i] == "L"){
//            newTxt[i] = newTxt[i-1];
//         }
//         else if(newTxt[i] == "R"){
//             newTxt[i] = newTxt[i+1];
//         }
//         else{
//             newTxt[i] = newTxt[i];
//         }
        
//     }
   
//     return newTxt.join("");
// }

// function UsingNotArr(x){
//     let Txt = "";
//     for(let i = 0; i<x.length; i++){
//         if(x.charAt(i) == "L"){
//             Txt = Txt + x[i-1];
//         }
//         else if(x.charAt(i) == "R"){
//             Txt += x[i+1];
//         }else{
//             Txt += x[i];
//         }
//     }
//     return Txt;
// }

// var x ="Right";
// console.log(x.at(2) == "g");




//problem - 51 - খোজ দ্যা সার্চ -১
//দুটি string দেওয়া থাকবে, যার ২য় টি ১ম টির sub string.  substring প্রথম কোথায় থেকে 
// শুরু হয়েছে।।
// const Given = prompt();
// console.log(Given);
// const substr = prompt();
// console.log(substr);
// console.log(`the start index of ${substr} = `,Given.indexOf(substr));


//problem - 52 - খোজ দ্যা সার্চ - ২

// const regexp = new RegExp(substr,"gi");
// const Arr =  Given.match(regexp);
// console.log(`the occurance of ${substr} = ${Array.from(Arr)}`);

// let count = 0;
// let index = 0;
// while(true){
//     index = Given.indexOf(substr,index);
//     if(index === -1){    // if string not found indexOf return -1..
//         break;
//     }
//     count++
//     index += 1;
// }
// console.log(`the occurance of ${substr} = ${count}`);


// let count = 0;
// for(let i = 0; i<Given.length; i++){
//     if(Given.includes(substr,i)){
//         count++;
//     }
// }

// console.log(`the occurance of ${substr} = ${count}`);

// console.log(Given.at(Given.length-1));
// const para = document.querySelector("p");
// const btn = document.querySelector("button");
// btn.addEventListener("click",myFunc);


// function myFunc(){
//    para.classList.toggle("para");
// }
// const para = document.querySelector("p");
// const btn = document.querySelectorAll("button");

// for(let i = 0; i<btn.length; i++){
//     const Btn = btn[i];
//     Btn.addEventListener("click",()=>{
//         let txt = Btn.innerHTML;
//         para.innerHTML = `${txt} is clicked!`;
//     });
//     console.log(btn[i].innerHTML);
//}




//how to play audio in java script..


// // DOM Elements
// const trackButtons = document.querySelectorAll('.track-btn');
// const pauseBtn = document.getElementById('pauseBtn');
// const stopBtn = document.getElementById('stopBtn');
// const volumeControl = document.getElementById('volumeControl');

// // Audio state
// let audio = null;
// let currentTrack = null;

// // Initialize volume
// let volume = 0.7;

// // Track button click handler
// trackButtons.forEach(button => {
//     button.addEventListener('click', () => {
        
//         const trackName = button.textContent;
//         playTrack(trackName);
//         playAnim(trackName);
//     });
// });

// // Pause/Play toggle
// pauseBtn.addEventListener('click', () => {
//     if (!audio) return;
    
//     if (audio.paused) {
//         audio.play()
//             .then(() => {
//                 pauseBtn.textContent = '⏸️ Pause';
//                 pauseBtn.disabled = false;
//             })
//             .catch(error => {
//                 console.error('Playback failed:', error);
//             });
//     } else {
//         audio.pause();
//         pauseBtn.textContent = '▶️ Play';
//     }
// });

// // Stop button
// stopBtn.addEventListener('click', () => {
//     if (!audio) return;
    
//     audio.pause();
//     audio.currentTime = 0;
//     pauseBtn.textContent = '▶️ Play';
// });

// // Volume control
// volumeControl.addEventListener('input', () => {
//     volume = parseFloat(volumeControl.value);
//     if (audio) {
//         audio.volume = volume;
//     }
// });

// // Animation function..
// function playAnim(trackName){
//     const button = document.querySelector(`.${trackName}`);
//     button.classList.add("animation");
//     setTimeout(()=>{
//         button.classList.remove("animation");
//     },1000);
// }
   
// // Play track function
// function playTrack(trackName) {
//     // Stop current audio if playing
//     if (audio) {
//         audio.pause();
//         audio.currentTime = 0;
//     }
    
//     // Create new audio based on track
//     let audioFile = '';
//     switch (trackName) {
//         case 'play_1':
//             audioFile = 'audio/Judaai (Audio Song) _ Badlapur _ Varun Dhawan_ Yami Gautam _ Nawazuddin Siddiqui(MP3_128K).mp3';
//             break;
//         case 'play_2':
//             audioFile = 'audio/Kaifi Khalil - Kahani Suno 2.0 [Official Music Video](MP3_320K).mp3';
//             break;
//         case 'play_3':
//             audioFile = 'audio/Rafta Rafta - Official Music Video _ Raj Ranjodh _ Atif Aslam Ft. Sajal Ali _ Tarish Music(MP3_320K).mp3';
//             break;
//         default:
//             return;
//     }
 
//     // Create new audio object
//     audio = new Audio(audioFile);
//     audio.volume = volume;
//     currentTrack = trackName;
  
//     // Enable controls
//     pauseBtn.disabled = false;
//     stopBtn.disabled = false;
    
//     // Play the audio
//     audio.play()
//         .then(() => {
//             pauseBtn.textContent = '⏸️ Pause';
//         })
//         .catch(error => {
//             console.error('Playback failed:', error);
//             pauseBtn.textContent = '▶️ Play';
//         });
    
//     // Handle when audio ends
//     audio.addEventListener('ended', () => {
//         pauseBtn.textContent = '▶️ Play';
//     });
    
//     // Handle errors
//     audio.addEventListener('error', () => {
//         console.error('Error loading audio');
//         pauseBtn.textContent = '▶️ Play';
//         pauseBtn.disabled = true;
//         stopBtn.disabled = true;
//     });
// }

// button loop testing...
// const para = document.querySelector("p");
// const button = document.querySelectorAll(".btn");
// console.log(button[1].innerHTML);
// for(let i = 0; i<button.length; i++){
//     const myButton = button[i];
//     console.log(myButton.innerHTML);
//     myButton.addEventListener("click",(e)=>{
//         console.log(e.target);
//         var text = myButton.innerHTML;
//         console.log(text);
//     })
// }

// const para = document.querySelectorAll("p");

// document.addEventListener("keypress",(event)=>{
//     var txt = event.key;
//     console.log(txt);
//     console.log(event.type);
//     console.log(event.target);
//     const disp = para.innerHTML = `you have pressed ${txt}`;
//     console.log(disp);
   
// });

// let count = 0;

// document.querySelector("textarea").addEventListener("keypress",(e)=>{
//     count++;
//     let text = e.key;
//     para[1].innerHTML = "you have pressed "+ count +" times";
// })


// const input = document.querySelector("input[name=name]");

// input.addEventListener("change",(e)=>{
//     console.log("changed");
//     console.log(e);
//     console.log(e.key);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.value);
// })



// const programmingLanuage  = document.querySelectorAll("input[name=program]");
// console.log(programmingLanuage);

// const language = Array.from(programmingLanuage);

// // console.log(language);

// language.map((program)=>{
//     program.addEventListener("change",(e)=>{
//        if(e.target.checked){
//         console.log(program.value);
//        }
//     })
// })


// const dept = document.querySelector("#dept");

// dept.addEventListener("change",(e)=>{
//     console.log(e.target.value);
//     console.log(e.target);
// })

// const form = document.querySelector("form");
// const lname = document.querySelector("input[name=lname]");
// const email = document.querySelector("input[name=email]");
// const pass = document.querySelector("input[name=Password]");
// const sub = document.querySelector("#signUp");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log(e.target);
//     console.log(e.type);
    
//     console.log(lname.value);
//     console.log(email.value);
//     console.log(password.value);

//     const UserInfo = {
//         Name: lname.value,
//         Email: email.value,
//         Password: password.value
//     }
//     lname.value = "";
//     email.value = "";
//     password.value = "";
 
//     var info = UserInfo;
//     usrInfo(info);

// })
// function usrInfo(UserInfo){
  
//     console.log(UserInfo);
// }

// const vid = document.querySelector("video");
// const details = document.querySelector("details");
// vid.addEventListener("play",(e)=>{
//     console.log("playing");
//     document.querySelector("p").innerHTML = e.target.textContent;
// })


// window.addEventListener("load",()=>{
//     console.log("load");
// })
// window.addEventListener("unload",(e)=>{
//     e.preventDefault();
//     console.log(e.type);
// })
// window.addEventListener("scroll",()=>{
//     console.log("scrolling");
// })
// window.addEventListener("resize",()=>{
//     const width = window.outerWidth;
//     const height = window.outerHeight;
//     console.log(`height: ${height}; width: ${width}`);
// })
// details.addEventListener("toggle",(e)=>{
//     console.log("toggle");
//     console.log(e.target);
//     console.log(e.target.open);

// })

// const txtarea = document.querySelector("textarea");

// txtarea.addEventListener("keydown",(e)=>{
//     console.log(e.key);
//     console.log(e.keyCode);
//     console.log(e.target.value);
//     console.log(e.code);
//     console.log(e.shiftKey);
//     console.log(e.repeat);
// })

// const input = document.querySelector("input");
// const p = document.querySelector("#clipboard");

// input.addEventListener("paste",()=>{
//     console.log("you have pasted.");
//     p.innerHTML = "you have pasted";
// })

// const div = document.querySelector("#div");
// const p = document.querySelector("#para");

// p.addEventListener("dragstart",(e)=>{
//     e.dataTransfer.setData("txt",e.target.id);
//     // console.log(e.target.id);
// });

// div.addEventListener("dragover",(e)=>{
//     e.preventDefault();
// });

// div.addEventListener("drop",(e)=>{
//     let paraId = e.dataTransfer.getData("txt");
//     console.log(paraId);
//     let newpara = document.getElementById(paraId);
//     div.appendChild(newpara);
//     e.preventDefault();
// })
// const fileInput = document.querySelector("#fileinput");
// div.addEventListener("click",()=>{
//     fileInput.click();
// });

// fileInput.addEventListener("change",(e)=>{
//     console.log(e.target.files);
// })








// console.log(window);
// console.log(window.location);

// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.pathname);

// document.querySelector("button").addEventListener("click",(e)=>{
//     location.assign("https://workspace.google.com/products/docs/");
// })

// function userName(){
//     let header = document.createElement("h1");
//     let name = prompt("enter your name");
//     let txt ;
//     if(name == null || name == ""){
//         console.log("enter a valid Name.");
//         txt = "no name found";
//     }else{
//         txt = name;   
//     }

//     const text = document.createTextNode("Welcome  "+ txt);
//     header.appendChild(text);
//     document.body.appendChild(header);
// }

// userName();


// setTimeout(()=>{
//     console.log("hi");
// },2000);



// saveButton[0].addEventListener("click",()=>{
//     info[0].innerHTML = "user resistration succesful.";
//     setTimeout(()=>{
//         info[0].innerHTML = "";
//     },2000);
// })


// saveButton[0].addEventListener("click",()=>{
//     let count = 1;
//     info[1].innerHTML = count;
//     setInterval(()=>{
//         count++;
//         info[1].innerHTML = "counter  " +count;
//     },1000);
    
// })


// //now nake a clock....
// const saveButton = document.querySelectorAll("button");
// const info = document.querySelectorAll("p");
// const span = document.querySelector("span");
// saveButton[1].addEventListener("click",startClock);

// function startClock(){
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let sec = date.getSeconds();
//     let hours = format(hour);
//     let minutes = format(minute);
//     let seconds = format(sec);
//     // let [h,txt] = AmPm(hours);
//     let Time = `${hours} : ${minutes} : ${seconds}`;
//     info[2].innerHTML = Time;
//     // console.log(`${hour}: ${minute}:${sec}`);
//     setInterval(startClock,1000);
//     return [hours,minutes,seconds];
// }
// let toggle = false;
// saveButton[2].addEventListener("click",(e)=>{
//     toggle = !toggle;
//     if(toggle){
//         let [Hour, Min, Sec, AmPm] = hour_12_24();
//         let Time = `${Hour} : ${Min} : ${Sec} `;
//         saveButton[2]. textContent = "24h format?";
//         info[3].innerHTML = AmPm;
//         info[2].innerHTML = `${Time}`;
//     }else{
//         let [Hour, Min, Sec] = startClock();
//         let Time = `${Hour} : ${Min} : ${Sec}`;
//         saveButton[2].textContent = "12h format?";
//         info[3].innerHTML = "";
//         info[2].innerHTML = `${Time} `;
//     }
// });

// // 12 hour format..
// function AmPm(hour){
//     let txt = "AM";
//     setInterval(()=>{
//         txt;
//     },1000);
//     if(24<hour>12 ){
//         hour = (hour)%12;
//         setInterval(()=>{
//             txt = "PM";
//         },1000);
//     }
//     if(hour == 24){
//         hour = 12;
//         setInterval(()=>{
//             txt = "PM";
//         },1000);
//     }
//     else{
//         hour = hour;
//     }
//     return [hour,txt];
// }

// // this function return 12h format time...
// function hour_12_24(){
//     let [hour, min, sec] = startClock();
//     let [Hour_12, txtForAmPm] = AmPm(hour);
//     return [Hour_12, min, sec, txtForAmPm];
// }

// // time formating when time<10..
// function format(time){
//     if(time<10){
//         time = "0"+time;
//     }
//     return time;
// }

// this code for clock...


//error handle...

// try{
//     alert("Hi");
//     alert(x);
//     alert("bye everyone");
// }catch(err){
//     console.log("inside catch");
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }
// finally{
//     console.log("bye everyone");
// }


// function buyIceCream(money) {
//     try {
//       // 1. TRY: Test this code first
//       if (!money) {
//         throw new Error("Hey! You forgot to give me money!"); // Custom error
//       }
//       if (money < 5) {
//         throw new Error("You need at least $5 for ice cream.");
//       }
//       console.log("Here's your ice cream! 🍦"); // Success!
//     } 
//     catch (error) {
//       // 2. CATCH: Handle errors here
//       console.error("🚨 Error:", error.message); // Show error message
//     } 
//     finally {
//       // 3. FINALLY: Runs no matter what
//       console.log("Transaction complete. Come back soon! 🏪");
//     }
//   }
  
//   // Test Cases
//   buyIceCream();      // Error: "Hey! You forgot to give me money!"
//   buyIceCream(2);     // Error: "You need at least $5 for ice cream."
//   buyIceCream(10);    // Success: "Here's your ice cream!"





// function withdrawMoney(balance, amount) {
//     if (amount > balance) {
//       console.log("Insufficient funds!");
//     } else {
//       console.log(`Withdrawn $${amount}. New balance: $${balance - amount}`);
//     }
//   }
  
//   withdrawMoney(100, 150); // "Insufficient funds!"
//   withdrawMoney(100, -50); // Bug! Negative withdrawal allowed!


//Without Error Handling (Danger!)
// function withdrawMoney(balance, amount) {
//     try {
//       // 1. Check for errors first
//       if (amount < 0) {
//         throw new Error("Cannot withdraw negative money! ❌");
//       }
//       if (amount > balance) {
//         throw new Error("Insufficient funds! 💸");
//       }
//       if (Math.random() < 0.3) {
//         throw new Error("Network error! 🚧"); // Simulates 30% chance of failure
//       }
  
//       // 2. If no errors, run this
//       console.log(`💵 Withdrawn $${amount}. New balance: $${balance - amount}`);
  
//     } catch (error) {
//       // 3. Handle errors here
//       console.error("🚨 ATM Error:", error.message);
  
//     } finally {
//       // 4. Always runs (success or error)
//       console.log("✅ Thank you for banking with us!");
//     }
//   }
  
//   // Test Cases
//   withdrawMoney(100, 50);   // Success! 
//   withdrawMoney(100, -20);  // Error: Negative money
//   withdrawMoney(100, 150);  // Error: Insufficient funds
//   withdrawMoney(100, 30);   // 30% chance: Network error
 

// const x = 1;
// let sum = 1;
// for(let  i = 1; i<=30; i++){
//     sum *= 2;
// }
// console.log(sum);
// //1073741823

// rest parameter..

// function sum(...z){
//    return z;
// }
// console.log(sum(2,3,4,5,6));

// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
//   }
//   console.log(sum(1, 2, 3, 4)); // 10

// function logWithTimestamp(...messages) {
//     const timestamp = new Date().toISOString();
//     console.log(timestamp, ...messages);
//     console.log(...messages);
// }
// logWithTimestamp("hi","hello","world","naim");

// let numbers = [1,2,3];

// console.log(numbers);

// let num = [...numbers,4,5,6];
// console.log(num)

// function stdInfo(name,age){
//     return{
//         name,
//         age,
//     }
// }

// console.log(stdInfo("Naim", 25));

// let msg = {
//     body(){
//         return `Hi I am a object function.`;
//     }
// }
// console.log(msg.body());

// let name = ['naim','sabbir','manik'];

// for(let x of name){
//     console.log(x);
// }

// const std = {
//     name:'Naim',
//     age: 24,
//     id: 2202078
// }

// for(let x in std){
//     // console.log(x);
//     // console.log(std[x]);

//     console.log(`${x} : ${std[x]}`);
// }

// const num = [1,2,3,4];

// num.forEach((x,ind,arr)=>{
//     arr[ind] = x+4;
// })
// console.log(num);

// const taskOne = (callback)=>{
//     console.log("task 1");
//     callback();
// }
// const taskTwo = (callback)=>{
//   setTimeout(()=>{
//     console.log("task 2: Data Loding");
//     callback();
//   },2000);
// }
// const taskThree = (callback)=>{
//     console.log("task 3");
//     callback();
// }
// const taskFour = (callback)=>{
//     console.log("task 4");
//     callback();
// }
// const taskFive = (callback)=>{
//     console.log("task 5");
//     higherOrder(4,square);
   
// }


// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive(
//                 );
//             });
//         });
//     });
// });

// function square(x){
//     return x*x;
// }
// function higherOrder(num, callback){
//     console.log(callback(num));

// }

// const promise1 = new Promise((resolve,reject)=>{
//     let con = 1;
//     if(con == true){
//         resolve('promise 1 completed');
//     }else{
//         reject('promise 1 not conpleted');
//     }
// });

// const promise2 = new Promise((resolve, reject)=>{
//     resolve("promise 2 is completed.");
// })

// promise1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })

// promise2.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// Promise.all([promise1,promise2]).then(([res1,res2])=>{
//     console.log(res1,res2);
// }).catch(err=>{
//     console.log(err);
// })

// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res);
// })

// const taskOne = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('task 1 is completed.');
//     });
// }
// const taskTwo = ()=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve('task 2 is completed.');
//       },3000);
//     });
// }
// const taskThree = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('task 3 is completed.');
//     });
// }
// const taskFour = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('task 4 is completed.');
//     });
// }
// const taskFive = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('task 5 is completed.');
//         higherOrder(4,square);
//     });
// }

// taskOne().then(res=>{
//     console.log(res);
// }).then(taskTwo).then(res=>{
//     console.log(res);
// }).then(taskThree).then(res=>{
//     console.log(res);
// }).then(taskFour).then(res=>{
//     console.log(res);
// }).then(taskFive).then(res=>{
//     console.log(res);
// }).catch(error=>{
//     console.log(error);
// })

// async function callAllTask(){
//     const task_1 = await taskOne();
//     console.log(task_1);
//     const task_2 = await taskTwo();
//     console.log(task_2);
//     const task_3 = await taskThree();
//     console.log(task_3);
//     const task_4 = await taskFour();
//     console.log(task_4);
//     const task_5 = await taskFive();
//     console.log(task_5);
// }

// callAllTask();

//API calling....

//XMLHttpRequest..
// const makeRequest = (method, url, data)=>{
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("content-type","application/json");
//     xhr.onload = () =>{
//         let data = xhr.response;
//         console.log(data);
//         let Data = JSON.parse(data);
//         console.log(JSON.parse(data));
       
//     }
//     xhr.send(JSON.stringify(data));
// }
// const getData = ()=>{
//     makeRequest("GET",'https://fakestoreapi.com/products/1');
// }
// getData();

// const sendData = ()=>{
//     makeRequest("POST",'https://fakestoreapi.com/products',{"title": "New Product", "price": 29.99});
// }
// sendData();


//fetch api...

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data[18]));

//   const product = { title: 'New Product', price: 29.99 };
//   fetch('https://fakestoreapi.com/products', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(product)
//   })
//     .then(response => response.json())
//     .then(data => console.log(data));






//question....
//     // Quiz questions array
//     const questions = [
//         {
//             question: "What is the capital of France?",
//             options: ["Berlin", "Madrid", "Paris", "Rome"],
//             answer: 2
//         },
//         {
//             question: "Which planet is known as the Red Planet?",
//             options: ["Venus", "Mars", "Jupiter", "Saturn"],
//             answer: 1
//         },
//         {
//             question: "What is the largest ocean on Earth?",
//             options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//             answer: 3
//         },
//         {
//             question: "Who painted the Mona Lisa?",
//             options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
//             answer: 2
//         },
//         {
//             question: "What is the chemical symbol for gold?",
//             options: ["Go", "Gd", "Au", "Ag"],
//             answer: 2
//         },
//         {
//             question: "Which country is home to the kangaroo?",
//             options: ["New Zealand", "Australia", "South Africa", "Brazil"],
//             answer: 1
//         },
//         {
//             question: "What is the tallest mountain in the world?",
//             options: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
//             answer: 1
//         },
//         {
//             question: "Which language has the most native speakers?",
//             options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
//             answer: 3
//         },
//         {
//             question: "What year did World War II end?",
//             options: ["1943", "1945", "1947", "1950"],
//             answer: 1
//         },
//         {
//             question: "Who wrote 'Romeo and Juliet'?",
//             options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
//             answer: 1
//         }
//     ];



// //selecting DOM Elements...
// const progressBar = document.getElementById("progress");
// const questionCount = document.querySelector(".QuestionCount");
// const scoreCount = document.querySelector(".scoreCount");
// const question = document.querySelector("#question");
// const option = document.querySelectorAll(".option ul li");
// const nextButton = document.querySelector(".nextBtn");
// // const result = ;

// //show first question...

// let count = 0;
// let QuestionCount;
// let ScoreCount;

// //initialize the quiz state...
// function startQuiz(){
//     QuestionCount = 0;
//     ScoreCount = 0;
//     showQuestion(questions[QuestionCount]);
    
//     questionCount.innerHTML = `Question ${QuestionCount+1} of ${questions.length}`;
//     progressBar.style.width = `${(QuestionCount+1)/questions.length* 100}%`;

// }
// // Show the next question or results
// function showNextQuestion() {
//     QuestionCount++;
//     // resetOption();
//     if (QuestionCount < questions.length) {
//         showQuestion(questions[QuestionCount]);
//         questionCount.innerHTML = `Question ${QuestionCount+1} of ${questions.length}`;
//         progressBar.style.width = `${(QuestionCount+1)/questions.length* 100}%`;
        
        
//     } else {
//         let a = confirm(`Quiz completed! Your score is ${ScoreCount}/${questions.length}. Do you want to play again?`);
//             if(a){
//                 startQuiz();
//             }
//         // showResult()
//     }
       
    
// }

// //score counting
// function isRightAnswer(ans){
//     if(ans){
//         ScoreCount++;
//     }else{
//         ScoreCount = ScoreCount;
//     }
    
//     scoreCount.innerHTML = `Score: ${ScoreCount}`;
// }

// //answer analysis...
// function findAnswer(x){
//     const options = document.querySelectorAll(".option ul li");
    
//     let rightAnswer = x;
//     let answered = false;

//     options.forEach((optn,index)=>{
//             const handler = (e)=>{
//                 options.forEach(a => a.style.pointerEvents = "none");

//                 if(answered) return;

//                 answered = true;
               
//                 let Ans = (rightAnswer == index)? true : false;

//                 isRightAnswer(Ans);
            
//                 if(Ans){
//                     optn.style.backgroundColor = "green";
//                 }else{
//                     optn.style.backgroundColor = "red";
//                     options[rightAnswer].style.backgroundColor = "green";
//                 }
//                 nextButton.style.display = "inline";
//             };
           
//             optn.addEventListener("click",handler);
//     });
// }

// //for showing question...
// function showQuestion(x){
   
//     question.innerHTML = x.question;
//     let i=0;
//     Array.from(option).forEach((a)=>{
//         a.innerHTML = x.options[i];
//         a.style.backgroundColor = "#aaa";
//         a.style.pointerEvents = "auto";
//         i++;
//     });
//     nextButton.style.display = "none";
//     findAnswer(x.answer);
// }

// nextButton.addEventListener("click", showNextQuestion);


// startQuiz();


console.log("naim");