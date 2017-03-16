const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// Get user details
console.log(user);
// ES6 Templates string with `` and ${variable}
fs.appendFile('greetings.txt',`Hello ${user.username}!`,function(err){
  if(err){
    console.log('Unable to write to file');
  }
});
