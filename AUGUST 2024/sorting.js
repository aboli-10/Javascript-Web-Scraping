// Linear Search Algorithm
// This algorithm searches for a target value in an array by checking each element one by one.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if the target is found
    }
  }
  return -1; // Return -1 if the target is not found
}

let array = [10, 23, 45, 70, 11, 15];
let targetValue = 70;
let linearSearchResult = linearSearch(array, targetValue);

if (linearSearchResult !== -1) {
  console.log("Linear Search: Element found at index " + linearSearchResult);
} else {
  console.log("Linear Search: Element not found");
}

// Binary Search Algorithm
// This algorithm searches for a target value in a sorted array by repeatedly dividing the search interval in half.
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Return the index if the target is found
    } else if (arr[mid] < target) {
      start = mid + 1; // Move the start to the right half
    } else {
      end = mid - 1; // Move the end to the left half
    }
  }

  return -1; // Return -1 if the target is not found
}

let sortedArray = [1, 3, 5, 7, 9, 11];
let binarySearchTarget = 7;
let binarySearchResult = binarySearch(sortedArray, binarySearchTarget);

if (binarySearchResult !== -1) {
  console.log("Binary Search: Element found at index " + binarySearchResult);
} else {
  console.log("Binary Search: Element not found");
}

// Quick Sort Algorithm
// This algorithm sorts an array by selecting a 'pivot' element and partitioning the array into two halves, then sorting the halves recursively.
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: An array of 0 or 1 element is already sorted
  }

  let pivot = arr[arr.length - 1]; // Choose the last element as the pivot
  let left = []; // Array to hold elements less than the pivot
  let right = []; // Array to hold elements greater than the pivot

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than pivot go to the left array
    } else {
      right.push(arr[i]); // Elements greater than pivot go to the right array
    }
  }

  // Recursively sort the left and right arrays and concatenate them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsortedArray = [3, 6, 8, 10, 1, 2, 1];
let sortedResult = quickSort(unsortedArray);
console.log("Quick Sort: Sorted Array: " + sortedResult);
