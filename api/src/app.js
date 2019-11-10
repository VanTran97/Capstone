const path = require('path')
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const accountRouter = require('./routers/account')

const app = express()
const port = process.env.PORT || 3001

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(userRouter)
app.use(accountRouter)


if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// 404 Page
// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         message: 'My 404 page',
//         name: groupName
//     })
// })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})