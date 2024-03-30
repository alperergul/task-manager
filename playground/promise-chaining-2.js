require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndUpdate('6605d86d8fc0e76f98c8ce01', { completed: true })
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log('count:', result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findOneAndDelete({ id });
  const count = await Task.countDocuments({});

  return count;
};

deleteTaskAndCount('6605d86d8fc0e76f98c8ce01')
  .then((count) => {
    console.log('count', count);
  })
  .catch((error) => {
    console.log(error);
  });
