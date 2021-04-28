var person = {
  firstName: 'Solomon',
  lastName: 'Jin',
  hobby: 'video games'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;

console.log("The person's name is:", fullName);

person.job = 'Unemployed';

console.log("The person's current job is:", person.job);

person.previousJob = 'Still Unemployed';

console.log("The person's previous job is:", person.previousJob);

console.log(person);

var myCar = {
  make: 'Honda',
  model: 'Civic',
  year: '2018'
};

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'], myCar['make'], myCar['model'] + '.');

myCar['color'] = 'grey';

console.log(myCar);
