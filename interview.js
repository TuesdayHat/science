//Easy problems

// function anagrams(str1, str2){
//   if (str1.length !== str2){
//     return false
//   } else {
//     for (var i = 0; i<str1.length; i++){
//       if (str1[i].indexOf(str2[i]) === -1){
//         return false
//       }
//       //need to make it not care about order of letters
//
//
//     }
//   }
// }


// function remove(str, int){
//   var letters = str.split('');
//
//   if (letters.length < int){
//     return invalid
//   }
//
//   letters[int] = null
//   return letters.join('')
// }

// function highCard(arr){
//   var total = 0;
//   var scores = {
//     J:1,
//     Q:2,
//     K:3,
//     A:4,
//   }
//
//   for (var i = 0; i<arr.length; i++){
//     console.log(scores[curr]);
//     var curr = arr[i];
//     if (scores[curr] !== undefined){
//       total += scores[curr];
//     }
//   }
//
//   return total
// }
//
// console.log(highCard(["2","3","4","5","6","7","8","9","10","J","Q","K","A"]))

// Medium problems-------------------------------------
// function longestBigram (num){
//
// }


// Hard problems --------------------------------

// function primeFactors(num){
//   var count = 0;
//
//   for (var i = 2; i <= num; i++){
//     if (isPrime(i) && isFactor(num, i)){
//       count++
//       // console.log(count);
//       // console.log(i);
//     }
//   }
//
//   return count;
// }
//
// function isFactor(num, fac){
//   return num%fac === 0;
// }
//
// function isPrime(num){
//   if (num <2){
//     return false;
//   }
//
//   for (var j = 2; j < num; j++){
//     if (num%j === 0){
//       return false;
//     }
//   }
//
//   return true
// }
//
// console.log(primeFactors(15));

function bubbleSort(arr){
  var result = [];
  var sorted = 0

  for (var i = 0; true; i++){
    var curr = arr[i%arr.length];
    var next = arr[(i+1)%arr.length];
    var hold = null

    if (next < curr){
      hold = curr;
      curr = next;
      next = hold;
      sorted++;
    }

    if (i >= arr.length){
      sorted = 0
    }
  }

  // if (sorted > 0){
  //   bubbleSort(result);
  // } //Recursive

  return result;
}
