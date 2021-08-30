



// function calc(num) {
//   const arr = Array.from({length: num}).fill(0);
//   const big = BigInt(arr.map((elem, idx) => elem + idx + 1).reduce((acc, e) => acc * e));
//   return big.toString().split('').reduce((acc, elem) => +acc + +elem);
// };
//
// console.log(calc(100));
//
//
// let man = {
//   name: 'Den'
// };
//
// function sayHi(pre) {
//   console.log(`${pre}, ${this.name}!`);
// }
//
// let log = sayHi.bind(man);
//
// log('Hello');
//
//
// let sum = function () {
//   return [].reduce.call(arguments, function (result, current) {
//     return result + current;
//   }, this.sum);
// };
//
// let bind = function (fn, context) {
//   let bindArgs = [].slice.call(arguments, 2);
//   return function () {
//     let fnArgs = [].slice.call(arguments);
//     return fn.apply(context, bindArgs.concat(fnArgs));
//   };
// };
//
// let bindedSum = bind(sum, {sum: 10}, 20, 30);
// console.log(bindedSum(40, 50, 60));
//
//
// const p = new Promise((resolve, reject) => {
//   console.log('выполняется запрос на back');
//   setTimeout(() => {
//     const data = {
//       name: 'Olya',
//       age: 34
//     };
//     console.log('получили data');
//     resolve(data);
//   }, 2500);
// });
//
// p.then((data) => {
//   console.log('промис 1 выполнился');
//   console.log('data: ', data);
//   return new Promise((resolve, reject) => {
//     console.log('в промису 2 меняем name');
//     setTimeout(() => {
//       data.name = 'Olga';
//       console.log('изменили');
//       resolve(data)
//     }, 2500)
//   });
// }).then((modifiedData) => {
//   console.log('завершился промис 2');
//   console.log('выводим новую data', modifiedData);
// });
//
//
// let clockDiv = document.querySelector('.clock');
//
// class Clock {
//   constructor({template}) {
//     this.template = template;
//   }
//
//   render() {
//     let date = new Date();
//
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//
//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
//
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;
//
//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
//
//     console.log(output);
//     clockDiv.textContent = `${hours}:${mins}:${secs}`;
//   }
//
//   stop() {
//     clearInterval(this.timer);
//   }
//
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
//
// class Clock1 extends Clock {
//   constructor({template}) {
//     super({template});
//   }
//
//   start() {
//     super.start()
//   }
// }

// let clock1 = new Clock1({template: 'm:s'});
// clock1.start();

// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// clock.stop();