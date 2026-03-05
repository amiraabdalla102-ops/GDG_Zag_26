/* number1 */

let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName[0].toLowerCase());
console.log(userName.slice(0,1).toLowerCase());
console.log(userName[0].toLowerCase().repeat(3));




let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toUpperCase().includes("Z")); 
console.log(word.startsWith("E")); 
console.log(word.endsWith("o")); 


/* number2 */

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.slice(0,num));
myFriends.pop();
console.log(myFriends);




let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();
friends.shift();
console.log(friends);




let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr);



let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[2][0].toUpperCase().substring(2,6));




let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if(haystack.includes(needle))
    {
        console.log("Found")
    };
if(haystack.indexOf(needle)==1){
    console.log("Found")
};
if(haystack.indexOf(needle)!=0){
    console.log("Found")
};


/* number3*/

let date = new Date("2007-2-10");
let day = new Date();
let diff = day - date;
let seconds = Math.floor(diff/1000);
let minutes = Math.floor(seconds/60);
let hours = Math.floor(minutes/60);
let days = Math.floor(hours/24);
let months = Math.floor(days/30);
console.log(seconds);
console.log(minutes);
console.log(hours);
console.log(days);
console.log(months);


