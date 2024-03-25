const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log(error);
      return;
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //   name: 'Alper',
    //   age: 26,
    // });

    // db.collection('users')
    //   .deleteMany({ age: 26 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .deleteMany({ completed: true })
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });

    // db.collection('users')
    //   .updateOne(
    //     { _id: new ObjectID('66009041f5318a00e0a7265d') },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('tasks')
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users').insertOne({
    //   name: 'Feyza',
    //   age: 26,
    // });

    // db.collection('users').findOne(
    //   { _id: new ObjectID('66009041f5318a00e0a7265d') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 26 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 26 })
    //   .count((error, count) => {
    //     console.log('Count', count);
    //   });

    //   db.collection('tasks').findOne(
    //     { _id: new ObjectID('66008d8e9dcd364fbc7ff994') },
    //     (error, task) => {
    //       console.log(task);
    //     }
    //   );

    //   db.collection('tasks')
    //     .find({})
    //     .toArray((error, tasks) => {
    //       console.log(tasks);
    //     });
    //   db.collection('tasks')
    //     .find({})
    //     .count((error, count) => {
    //       console.log('count:', count);
    //     });
  }
);
