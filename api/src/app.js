const path = require('path')
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3001

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(express.json())
app.use(userRouter)

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