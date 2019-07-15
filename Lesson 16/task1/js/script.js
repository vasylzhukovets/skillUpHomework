/**Author: Vasyl Zhukovets
 * javascript tasks
 * 
 */
//task1
var arr = [];

function getPushArray() {
    var f = prompt();
    if (f === null) {
        console.log(arr);
    } else {
        arr.push(f);
        getPushArray();
    }
}
getPushArray();



// task2
var arrMatrix = [
    [1, 1, 1],
    [1, 5, 1],
    [1, 1, 1]
];

function getMatrixIndex(arrMatrix) {
    var sum = 0;
    for (var i = 0; i < arrMatrix.length; i++) {
        for (var j = 0; j < arrMatrix.length; j++) {
            sum = sum + arrMatrix[i][j];
        }
    }
    return sum;
}

console.log(getMatrixIndex(arrMatrix));

// task3

var longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur laboriosam nisi fuga";
var array = longString.split(' ');
console.log(array);
for (var i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
        console.log(array[i]);
    }
}
//task3 functional metod


function getLongStrings() {
    var targetArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            targetArray.push(array[i]);
        }
    }
    return targetArray;
}
var result = getLongStrings();
console.log(result);

//task4

var numberArray = [1, 9, 22, 7, 6];
numberArray.splice(3, 0, 8);
console.log(numberArray);

// task5
var myMax = 100;

function randomNumber(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push(Math.floor(Math.random() * myMax) + 1);
    }
    return array;
}
var arrayResult = randomNumber(10);
console.log(arrayResult);
console.log(arrayResult.indexOf(+prompt("Enter number")));




//task6 

var loremString = "Lorem elit Consequuntur dolor sit fugaath";
var words = loremString.split(' ');
console.log(words);

function getLongestWord(words) {
    var longestWord = "";
    words.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
console.log("The longest word is: " + getLongestWord(words));

//task7

var arrayOfNumbers = [8, 6, 12, 10];
console.log(arrayOfNumbers);
var square = arrayOfNumbers.map(function(sqr) {
    return sqr * sqr;
});
console.log(square);