import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// function findEvenIndex(arr) {
//   let l = 0;
//   let r = arr.reduce((acc, int) => (acc += int), 0);
//   for (let i = 0; i < arr.length; i += 1) {
//     r -= arr[i];
//     if (r === l) {
//       return i;
//     }
//     l += arr[i];
//   }
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));

// function removeEveryOther(arr) {
//   return arr.filter((e, i) => !(i % 2));
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function sortArray(array) {
//   const odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
//   console.log(odd);
//   return array.map(elem => (elem % 2 === 0 ? elem : odd.shift()));
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// function queueTime(customers, n) {
//   let tills = Array(n).fill(0);
//   // console.log(tills);

//   for (const customer of customers) {
//     let index = tills.indexOf(Math.min(...tills));
//     // console.log(Math.min(...tills));
//     // console.log(index);
//     tills[index] += customer;
//   }
//   return Math.max(...tills);
// }

// function queueTime(customers, n) {
//   let queueArr = Array(n).fill(0);
//   customers.forEach(customer => {
//     queueArr[0] += customer;
//     queueArr.sort((a, b) => a - b);
//   });
//   return Math.max(...queueArr);
// }

// console.log(queueTime([], 1));
// console.log(queueTime([1, 2, 3, 4], 1));
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
// console.log(queueTime([1, 2, 3, 4, 5], 100));

// function sumMix(x) {
//   return x.reduce((acc, int) => acc + +int, 0);
// }
// console.log(sumMix([9, 3, '7', '3']));

// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]/.test(x)).length;
// }
// console.log(countSmileys([':D', ':~)', ';~D', ':)']));
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));

// function countPositivesSumNegatives(input) {
//   let pos = 0;
//   let neg = 0;

//   input.forEach(e => {
//     e > 0 ? (pos += 1) : (neg += e);
//   });

//   return input && input.length ? [pos, neg] : [];
// }

// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// );
// console.log(countPositivesSumNegatives([]));

//=====================================================================================

// function longestConsec(strarr, k) {
//   let longest = '';
// console.log(strarr.length - k);

//   for (let i = 0; k > 0 && i <= strarr.length - k; i += 1) {
//     const tempArray = strarr.slice(i, i + k);
//     console.log(tempArray);
//     const tempStr = tempArray.join('');
//     if (tempStr.length > longest.length) {
//       longest = tempStr;
//     }
//   }
//   console.log(
//     strarr.map((value, index) => strarr.slice(index, index + k).join(''))
//   );
//   return longest;
// }
// console.log
// longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)

// console.log(
//   longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
// );
//abigailtheta
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));
//ixoyx3452zzzzzzzzzzzz
// console.log(
//   longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)
// );
//==========================================================================================

// function openOrSenior(data) {
//     return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? 'Senior' : 'Open'
//   );
// }

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

//=================================================================================

// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
//   );
// }

// console.log(feast('great blue heron', 'garlic naan'));

//====================================================================================

// const min = function (list) {
//   return Math.min.apply(null, list);
//   // return Math.min(...list);
// };

// const max = function (list) {
//   return Math.max.apply(null, list);
// };

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

//================================================================================

// function high(x) {}

// console.log(high('man i need a taxi up to ubud'));
// console.log('abc'.charCodeAt());
