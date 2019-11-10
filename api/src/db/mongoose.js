const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ppcryptouser:1234@cryptogame-bhtee.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})