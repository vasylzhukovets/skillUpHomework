/**Author: Vasyl Zhukovets
 * 
 */

/**@description Taking two numbers and comparison thems. If var a more or are var b then console log
 * @return true or false by condition
 */
var a = 5;
var b = 3;
if ((a > b) && (a === b)) {
    alert(true);
}
else {
    alert(false);
}//first
/**@description Takin two vars(number) and check is that 
 * 
 */
var a = 5;
var b = 3;
if (true && 0 && ('a' < 'Z')) {
    alert('its ok')
}
else {
    alert('bad idea')
}//second


var a = 5;
var b = 3;
if ((a > b) || true || ('2' == 2) || (false == '')) {
    alert('all nice')
}
else {
    alert('the biggest mistake')
}
//third
var a = 5;
var b = 3;
if ((a < b) && (0 == false)) {
    alert('false')
}
else alert('true');//fourth

var a = 5;
var b = 3;
if (!(2 == 2) || (true && '')) {
    alert('go home')
}
else {
    alert('I don\'t know why it work')
}//fifth