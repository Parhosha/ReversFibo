let createArrays = require('./main.js');
var assert = require('assert');

let fibar = `
1 wor сывдлсдлвысьлдыв сдлвфдлсофдларолвЫ\n
2 йарумас йырбарх ьнечО\n
3 хяарумас йырбарх ьнечо еН\n
5 E\n
8 ewa ewa ewa ewa ewA\n
13 \n
144 dS\n
`;
let start = `
Ывлоралдфослдфвлдс выдльсывлдслдвыс row 1
Очень храбрый самурай 2
Не очень храбрый самураях 3
We 4
E 5
Wwwwwwewwww qweqweqwe 6 
roqwe awe awe wee 7 
Awe awe awe awe awe 8 
row 9 
row 10
11 
12
13
Sd 144
`;

it('правильно', () => {
  assert.equal(createArrays(start), fibar);
});
