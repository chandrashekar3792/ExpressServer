console.log('Notes module');

// console.log(module);//All nodejs available modules
//Reuse the functions or variables in other files using module.exports

// module.exports.age = 24;

module.exports.addNote = () =>{
  return 'new Note';
}

module.exports.add = (a,b) =>{
  return a+b;
}
