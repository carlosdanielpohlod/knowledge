const bcript = require('body-parser')

module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation

    const encryptPassword = password => {
        const salt = bcript.genSaltSync(10)
        return bcript.hashSync(password, salt)
    }
    const save = async (req, res) =>{
        const user = {...req.body}
    }

    return {save}
}