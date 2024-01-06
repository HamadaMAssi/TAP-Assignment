function getMissingNumber(numbers) {
    const n = numbers.length;
    // Calculate the actual sum of elements in the input array
    const theActualSum = numbers.reduce((total, current)=> total += current, 0)
  
    // Calculate the expected sum of numbers from 0 to n using the formula
    const theExpectedSum = (n * (n + 1)) / 2;
    //now the missing number is the result of theExpectedSum - theActualSum
    return theExpectedSum - theActualSum;
  }
  
  console.log("%c Q2: Javascript Question\n\n", "font-size: 1.5rem");
  // Example 1
  console.log(
    "%c Example :  the number missing from the range [3, 0, 1] is %c" +
      getMissingNumber([3, 0, 1]), "font-size: 1rem", "font-size: 1rem; color: green"
  );
  // Example 2
  console.log(
    "%c Example :  the number missing from the range [9, 6, 4, 2, 3, 5, 7, 0, 1] is %c" +
      getMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), "font-size: 1rem", "font-size: 1rem; color: green"
  );
  // Example 3
  console.log(
    "%c Example :  the number missing from the range [0, 1] is %c" +
      getMissingNumber([0, 1]), "font-size: 1rem", "font-size: 1rem; color: green"
  );
  
  