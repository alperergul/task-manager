const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const main = async () => {
  // const task = await Task.findById('6631423aa6cfe5380c9439ab');

  // await task.populate('owner').execPopulate();

  // console.log(task.owner);

  const user = await User.findById('6629586ae18bb0396c00d14a');

  await user.populate('tasks').execPopulate();

  console.log(user.tasks);
};

main();
