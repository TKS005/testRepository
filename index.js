// 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 

console.log(ages);

// 1a.

console.log(ages[ages.length-1] - ages[0]);

// 1b.
ages.push(55);

console.log(ages);

console.log(ages[ages.length-1] - ages[0]);

// 1c.
var i, sum=0;

for(i=0; i<ages.length; i++) {

    sum = sum + ages[i];

}

console.log("Average age in the ages array is: ",sum/ages.length);

  // 2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);

// 2a.
sum=0;

for(i=0; i<names.length; i++){

    sum = sum + names[i].length;

}

console.log("Average letters per name in the names array is : ",sum/names.length);

// 2b.
var con= names[0];

for(i=1; i<names.length; i++){

    con = con.concat(", ",names[i]);

}

console.log("Concatenated  names: ",con);

// 3
//arrayName.length-1;

// 4
//arrayName[0];

// 5

var nameLengths = [];

    for(i=0; i<names.length; i++){

        nameLengths[i] = names[i].length;

    }

    console.log(nameLengths);

    // 6

    sum=0;

    for(i=0; i<nameLengths.length; i++){

        sum = sum + nameLengths[i];

    }

    console.log("Sum of all elements in the nameLengths array is : ",sum);

    // 7 
    function concatWord(word, n){

        var con = word;

        for(i=1; i<=n; i++){

            con = con.concat(word);

        }

        return con;

    }
    console.log("Concatenated words : ",concatWord("Hello", 8));

    // 8

    function fullName (firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    
    var fullName = fullName('Jaylin', 'Williams');
    
    console.log(fullName);

    // 9
    function isTotalGreaterThan100(arr) {

        sum=0;

        for(i=0; i<arr.length; i++) {

        sum = sum + arr[i];

        }

      if(sum > 100) {

        return true;

      }

      else {
           return false;
        }
    }
 // 10

    function average() {

        for(i = 0; i < ages.length; i++) {

        sum = sum + ages[i];

        }

        return (sum/ages.length);

    }

    // 11

    let arr1 = [2, 5, 6, 9];

    let arr2 = [13, 5, 8, 15];

    function compareAverage(arr1, arr2) {

        if(average(arr1) > average(arr2)) {

            return true;

        }

        else {

            return false;

        }

    }

    // 12
    function willBuyDrink(isHotOutside, moneyInPocket) {

        if((isHotOutside) && (moneyInPocket > 10.50)) {

            return true;

        }

        else {

            return false;

        }

    }

    //Value initialization

    var hotOutside = true;

    var moneyInthePocket = 30.5;

    //Printing the return value of willBuyDrink function

    console.log("I will buy a drink: ",willBuyDrink(hotOutside, moneyInthePocket));

    // 13

    function testNum(a) {
        let result;
        if (a > 28) {
          result = 'I have enough vacation to go to the beach!!';
        } else {
          result = 'No beach for me. ';
        }
        return result;
      }
      
      console.log(testNum(40));

      //I wrote this function because I found out I have enough vacation hours at work to take a whole week off to go to the beach this summer! 
      