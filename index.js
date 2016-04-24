const eslint = 'ESLINT is awesome!!!'

console.log('eslint =>', eslint)

const arrow = () => { return 'This is an arrow function' }

console.log('arrow', arrow())

const n = 3

switch (n) {
  case 1:
  case 2:
  //this shouldn't break
  //fallthrough
  case 3:
  console.log('Case 3')
}
