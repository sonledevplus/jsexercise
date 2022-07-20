//Bài 1
function check(num) {
  return num > 0;
}

function run(data) {
  value = data.find(check);
  index = data.findIndex(check);

  if (value == undefined) {
    console.log('No result');
  } else {
    console.log(index, value);
  }
}

//Bài 2
let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];
function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

//Bài 3
function userFullname(users) {
  return (newUsers = users.map((user) => ({
    id: user.id,
    fullName: `${user.name} ${user.surname}`,
  })));
}

//Bài 4
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
console.log(unique(values)); // Hare, Krishna, :-O
