const fs = require('fs')
const chalk = require('chalk')

const addUser = (username, password, email) => {
    const users = loadUsers()

        users.push({
            username: username,
            password: password,
            email: email
        })
        saveUser(users)
        console.log('New user added!')
}

const loginUser = (username, password) => {
    const users = loadUsers()
    const findUser = users.find((user) => user.username === username && user.password === password)

    if(findUser){
        console.log('Logged in!')
    } else {
        console.log(chalk.red('Could not find user!'))
    }
}

const saveUser = (users) => {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

const loadUsers = () => {
    try {
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addUser: addUser,
    loginUser: loginUser
}