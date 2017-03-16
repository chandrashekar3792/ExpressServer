const fs = require('fs');
const os = require('os');

//Adding otherfiles
const note = require('./modules');

//Adding 3rd party libraries
const _=require('lodash');
const user = os.userInfo();
// Get user details
//console.log(user);
// ES6 Templates string with `` and ${variable}
// fs.appendFile('greetings.txt',`Hello ${user.username}! and my age is ${note.age}`,function(err){
//   if(err){
//     console.log('Unable to write to file');
//   }
// });
note.addNote((err,res)=>{
  if(!err){
    console.log('something wrong');
  }else{
    console.log(res);//Notes module
  }
});

 console.log(note.add(9,-2));
console.log(_.isString(true));
console.log(_.isString('Chandru'));

var filteredArray=_.uniq(['Chandru',1,'Chandru',1,2,3,4]);
console.log(filteredArray);
