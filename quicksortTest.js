//a version of quicksort with Javascript...

var myArray = [];

//Generate a random unsorted array of 50 intergers
for (var i = 0; i < 20; i++) {
    myArray.push(Math.floor(Math.random() * 100));
}

console.log(myArray);

//function to swap elements
function swapElements(left, right) {
    var tempHolder = myArray[left];
    myArray[left] = myArray[right];
    myArray[right] = tempHolder;
}

//function to divide and conquer
function divyArray(left, right) {
    var pivot = myArray[Math.floor((left + right) / 2)]; //middle of section

    while (left <= right) {
        while (myArray[left] < pivot) {
            left++;
        }
        while (myArray[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swapElements(left, right);
            left++;
            right--;
        }
    }
    return left;
}

//the quicksort function which recursively calls iteself to sort
function quickSort(left, right){
    var index;
    if (myArray.length > 1) {
        index = divyArray(left, right);
        
        if (left < index - 1) {
            quickSort(left, index -1);
        }
        if (index < right) {
            quickSort(index, right);
        }
    }
}
quickSort(0, myArray.length - 1);
console.log(myArray);
