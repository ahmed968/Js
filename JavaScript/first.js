function reverseString(s) {
    return s.split('').reverse().join('');
  }
  
  function countCharacters(s) {
    return s.length;
  }
  
  function capitalizeWords(s) {
    return s.toLowerCase().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }


  //array 
  function findMaximum(arr) {
    return Math.max.apply(null, arr);
  }
  
  function findMinimum(arr) {
    return Math.min.apply(null, arr);
  }
  
  function sumOfArray(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    });
  }
  
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }

  // math 
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function isPrime(n) {
    if (n <= 1) {
      return false;
    } else if (n <= 3) {
      return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    } else {
      let i = 5;
      while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
          return false;
        }
        i += 6;
      }
      return true;
    }
  }
  
  function fibonacciSequence(n) {
    let sequence = [0, 1];
    while (sequence.length < n) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
  }