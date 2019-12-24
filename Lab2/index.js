const arrayUtils = require('./arrayUtils.js');
const stringUtils= require('./stringUtils.js');
const objUtils= require('./objUtils.js');

const first = { x: 2, y: 3};
const second = { a: 2, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

//Head Tests
try {
    // Should Pass
    const headOne = arrayUtils.head([1, 2, 9]);
    console.log(headOne);
    console.log('head passed successfully');
 } catch (e) {
    console.error('head failed test case');
 }
 try {
    // Should Fail
    const headTwo = arrayUtils.head("hello");
    console.error('head did not error');
 } catch (e) {
    console.log('head failed successfully');
 }

 //CountElements Test

 try {
    // Should Pass
    const cel = arrayUtils.countElements([1, 2, 9, 3, 3]);
    console.log(cel);
    console.log('CountElements passed successfully');
 } catch (e) {
    console.error('CountElements failed test case');
 }
 try {
    // Should Fail
    const cel = arrayUtils.countElements(9999);
    console.error('CountElements did not error');
 } catch (e) {
    console.log('CountElements failed successfully');
 }

 //Repeat Test
 try {
    // Should Pass
    const rep = stringUtils.repeat("hello",3);
    console.log(rep);
    console.log('Repeat passed successfully');
 } catch (e) {
    console.error('Repeat failed test case');
 }
 try {
    // Should Fail
    const rep = stringUtils.repeat(3,"hello");
    console.error('Repeat did not error');
 } catch (e) {
    console.log('Repeat failed successfully');
 }

 //Extend Test
try {
    // Should Pass
    const ex = objUtils.extend(first,second,third);
    console.log(ex);
    console.log('Extend passed successfully');
 } catch (e) {
    console.error('Extend failed test case');
 }
 try {
    // Should Fail
    const ex = objUtils.extend(first);
    console.error('Extend did not error');
 } catch (e) {
    console.log('Extend failed successfully');
 }


 try {
   // Should Fail
   const eq = arrayUtils.isEqual(['a', 1, 'b', 2], ['a', 1, 'b', 2]);
   console.log(eq);
   console.error('eq did not error');
} catch (e) {
   console.log('eq failed successfully');
}