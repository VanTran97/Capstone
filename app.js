const chalk = require('chalk')
const yargs = require ('yargs')
const login = require('./login.js')
const getData = require('./get-data.js')

// Customise yargs version
yargs.version('1.1.0')

// Create register command
yargs.command({
    command: 'register',
    describe: 'Register new user',
    builder: {
        username: {
            describe: 'User username',
            demandOption: true,
            type: 'string'
        },

        password: {
            describe: 'User password',
            demandOption: true,
            type: 'string'
        },

        email: {
            describe: 'User email',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       login.registerUser(argv.username, argv.password, argv.email)
    }
})

// Create login command
yargs.command({
    command: 'login',
    describe: 'Login',
    builder: {
        username: {
            describe: 'User username',
            demandOption: true,
            type: 'string'
        },

        password: {
            describe: 'User password',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        login.loginUser(argv.username, argv.password)
    }
})

// Create get command
yargs.command({
    command: 'get',
    describe: 'Get crypto data',
    handler(){
        getData.getData()
    }
})

yargs.parse()