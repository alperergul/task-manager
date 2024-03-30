require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('6605d5d32580a465147a7495', { age: 1 })
  .then((user) => {
    console.log('user: ', user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  });
