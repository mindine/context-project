function bindToAnArg(func, arg) {
  return func.bind(null, arg);
}
// function test(str){
//   console.log(str);
// }

// let finish = bindToAnArg(test,'hello');
// console.log(finish());

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
