// Bài 1:
function giaiThua(n) {
  let result = 1;
  if (n >= 1 || n < 20) {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  } else {
    return alert('Invalid number');
  }
}

//Bài 2:
function reverseString(str_input) {
  return str_input.split('').reverse().join('');
}

reverseString('Hi');

//Bài 3:

function run(name, job) {
  const person = {
    name: '',
    job: '',
    printIntroduction: function () {
      console.log(`My name is ${this.name}.My job is ${this.job}`);
    },
  };
  const me = Object.create(person);
  me.name = name;
  me.job = job;

  me.printIntroduction();
}

run('STUnited', 'coding');

//Bài 4:
function run() {
  var person = {
    firstName: 'Trung',
    lastName: 'Vuong',
    age: 50,
    eyeColor: 'blue',
  };

  console.log(Object.values(person));
}
run();
