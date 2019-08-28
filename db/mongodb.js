const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb+srv://ppcryptouser:1234@cryptogame-bhtee.mongodb.net/test?retryWrites=true&w=majority'
const databaseName = 'capstone'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    console.log('connection success')

    const db = client.db(databaseName)

    db.collection('users').insertOne(
        {
            login: 'Justin',
            password: '1234',
            email: 'justin@gmail.com'
        }, (error, user) => {
            if (error) {
                return console.log('Unable to insert')
            }

            console.log(user.ops)
        })
})