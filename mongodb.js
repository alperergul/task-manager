const { MongoClient } = require('mongodb');

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
    // db.collection('users').insertOne(
    //   {
    //     name: 'Alper',
    //     age: 26,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Feyza',
    //       age: 26,
    //     },
    //     {
    //       name: 'Ezgi',
    //       age: 20,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log(error);
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        {
          description: 'Homeworks',
          completed: false,
        },
        {
          description: 'Delete your pc',
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          console.log(error);
        }

        console.log(result.ops);
      }
    );
  }
);
