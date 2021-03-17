const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db
consign()
    
    .include('./api/validation.js')
    .then('./api/user.js')
    .then('./config/middlewares.js')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log("Backend executando")
})