function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var twoHours = convertHoursToMinutes(2);
console.log('2 hours is', twoHours, 'minutes.');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var helloWorldGreeting = getGreeting('World');
console.log('Greeting:', helloWorldGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var equationResult = addAndMultiplyBy5(10, 5);
console.log('(10+5)*5 is', equationResult);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyDividResult = multiplyAndDivideBy5(35, 10);
console.log('35 times 10 divided by 5 is', multiplyDividResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractResult = subtractTwoNumbers(22, 7);
console.log('22 minus 7 is', subtractResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumferenceResult = getCircleCircumference(5);
console.log('The circumference of a circle with radius 5 is', circumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Solomon', 'Jin');
console.log('My full name is', fullName);

function cube(num) {
  return Math.pow(num, 3);
}

var cubedResult = cube(5);
console.log('5 cubed is', cubedResult);
