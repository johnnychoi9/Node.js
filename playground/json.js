// var obj = {
//   name: 'Johnny'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);

// var personString = '{"name": "Johnny", "age": 20}';
// var person = JSON.parse(persongString);

const fs = require('fs');

var originalNote = {
  title: "Some title",
  body: "Some body"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
