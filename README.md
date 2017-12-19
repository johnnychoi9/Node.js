# Node.js

app.js 

    console.log('Starting app.js');

    const fs = require('fs');
    const os = require('os');
    const _ = require('lodash');
    const notes = require('./notes.js');

    // console.log(_.isString(true));
    // console.log(_.isString('Johnny'));

    var filteredArray = _.uniq(['Johnny']);
    console.log(filteredArray);

    // console.log('Result:', notes.add(2,7));
    //
    // var user = os.userInfo();

    // fs.appendFileSync('greetings.txt', `Hello ${user.username}! Are you ${notes.age}`);
    
notes.js

    console.log('Starting notes.js');

    // console.log(module);
    // module.exports.addNote = () => {
    //
    //
    // };

    module.exports.add = (a,b,) => {
      return a+b;
    }

