
let ages = [3,9,23,64,2,8,28,93]; // This array ages has the age values inside it .
let minusAge = ages[ages.length - 1]-ages[0]; // This here first subtract from the last element of the array to get at first element . 
console.log("Ages:", minusAge); // This will display element at ages [8]-ages[0].
 ages.push(75); // This will push the value 75 to array ages .
 console.log(ages); // This will display the array ages with value 75 included.
 let sum = 0; // Declared Sum here 
 for(let i= 0; i < ages.length; i++){ // This for loop will go over the array 
    sum += ages[i]; // And will add all the elements of the array and assign them to sum
 }
let averageArray = sum / ages.length; /* This will take the Average of the array 
by sum divided by length of the array and assign it to averageArray.*/
 console.log('Average age:',averageArray); // This will diplay the Average Age . 

 let names = ["Sam","Tommy","Tim","Sally","Buck","Bob"]; // Created a Array Name that stores the names.
 let totalLetters =0; // This will hold the total letters . 
for(let i = 0; i < names.length; i++){ // This will go through  the array 
    totalLetters+= names[i].length; // will hold running total of the array name and assign it back to totalLetters. 
}
 let averageLetters = totalLetters / names.length; /* This will divide the total number in array by length
  of the array and assign it to averageLetters */
 console.log('Average Number Letter Per Name:',averageLetters); // This will output the Average number of letters in array 

 let concatenatedNames = ""; // This is for concatenation purpose .
 for(let i = 0; i < names.length; i++){ // This will go through the array names
    concatenatedNames += names[i]; /* it concatenates each string from the names array to the concatenatedNames 
    variable, resulting in a single string containing all the concatenated strings from the array.*/

    if( i !== names.length - 1){ // This adds a space after each string in the names array, except for the last string.
        concatenatedNames += " ";
    }
}
console.log('Concatenated Names:',concatenatedNames); // This will display the Concatenated Names. 

/*Q3. How to access the last element of any array ?
Ans: One of the  way to access the last element of any array is by subtracting 1 from the array length 
like this let minusAge = ages[ages.length - 1];

 Q4.How do you access the first element of any array ?
 Ans: One of the way to access the first element of any array is by using Array Shift ()Method removes the 
 first element of the array reducing the size of the original by 1.  
 For Example 
 const array = [1, 2, 3, 4, 5];
const firstElement = array.shift();
console.log(firstElement);
*/
 names = ["Sam","Tommy","Tim","Sally","Buck","Bob"];
let nameLengths = []; // This empty array will hold the Letters numbers of each name. 

for(let i = 0; i < names.length; i++){ // Again this will go throught the array.
    let name = names[i]; //  will hold the value of the current element at index
    nameLengths.push(name.length); // This will push the length of each name to the nameLengths array 
}
console.log(nameLengths); // Will Display the nameLengths Array.

 let arrsum = 0; // This will  store the sum of elements,
 for(let i = 0; i < nameLengths.length; i++){ // This will through the array 
    arrsum +=nameLengths[i]; // This will gather all the length and Add them.
 }
  console.log("Sum of the Namelength :",arrsum); // This will display all lengths from Array names.

  function printWord (word,times){ // Declares a function named printWord that takes two parameters: word (a string) and times (a number).
    let concat = word.repeat(times); // This is for Repeating .
    console.log (concat); //Prints the concatenated string stored in the concat variable to the console.
  }
  printWord('Hello', 4); // Here I callled the function in action . 

  function createfullName (firstName,lastName){ // This fuction named createfullName that takes two parameters firstName and lastName.
    let fullName = `${firstName} ${lastName}`; // This will hold the fullName .
    return `Full Name is :${fullName}`; //This will take the full name.
  }
  console.log(createfullName('Rahman','Qureshi')); //The function is called here and passed first name and last Name here .
   
  function greaterThan100(ages){  // This fucntion takes one parameter array ages 
    let sumGreater = 0; 
    for (let i=0; i < ages.length; i++){ // Go throught the ages array . 
        sumGreater +=ages[i]; // This will hold the ages and add than them 
    }
    if (sumGreater > 100){ // This If statement will see if array hold the value and see if it's greater than 100.
        console.log(true); // If it's true will display True. 
        return true ;
    } else {
        console.log(false) // If not it will display False . 
        return false ;
    }
    
  }
 greaterThan100(ages); // Function is called here.
 let array = [50,80,95,120];
 function calculateAverage(array){
    aveSum = 0;
    for(let i =0 ; i < array.length; i++){ // This will go through the array.
        aveSum += array[i]; 
    }
    let average = aveSum / array.length ; // This will calculate the Average of the array and Assign it to Average.
  return average ;
 }
 let avg = calculateAverage(array); // Call the function here 
 console.log('Average:',avg); // Will Display the Average.

 let array1 = [50,100,150,200,350]; // Created Two Arrays here which has Name Array 1 and Array2.
 let array2 = [100,150,200,300];

 function array1greaterthanArray2(array1,array2){ // This function has two parameters array1 and array2.
    let sumOfArray1 =0;
  for(let i = 0; i < array1.length; i++){ //This for loop  will through the Array. 
    sumOfArray1 +=array1[i]; // Sum all the elements in a array and assign it to sumOfArray1. 
  }
  let sumOfArray2 =0;
  for(let i = 0; i < array2.length; i++){ //This for loop  will through the Array. 
    sumOfArray2 +=array2[i]; // Sum all the elements in a array and assign it to sumOfArray2
  }
  let avgArr1 =  sumOfArray1 / array1.length; // This will hold the average of the array1 and assign it to avgArr1.
  let avgArr2 = sumOfArray2 / array2.length;// This will hold the average of the array2 and assign it to avgArr2.

  console.log('Averages of Two Array;', avgArr1, avgArr2); // This will Display Both of the Arrays Average .
  if(avgArr1 > avgArr2){ //This If statement will see if avgArr 1 is greater than avgArr2
    console.log(true); // Will display true if above statement is met.
    return true ;
 } else {
    console.log(false); 
    return false ;
 }
 }
 array1greaterthanArray2(array1,array2); // This function is invoked here .
 
 function willBuyDrink(isHotOutSide , moneyInPocket){ // This function will take 2 parameters isHotOutSide , moneyInPocket
   let buyDrink = isHotOutSide === true && moneyInPocket > 10.50; /* This will check if it isHotOutSide and moneyInPockect is 
   than > value 10.50 wll by the Drink. */
   console.log('Buy A Drink:',buyDrink); // This will show true or false .
   return buyDrink;
 }
 willBuyDrink(true, 12); // Function is Called here  passed true and 12 will result in true,Can change to show False.

 
  


