const bcript = require('body-parser')

module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation

    const encryptPassword = password => {
        const salt = bcript.genSaltSync(10)
        return bcript.hashSync(password, salt)
    }
    const save = async (req, res) =>{
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id
        try{
            const userDB = await app.db('users').where({email:user.email}).first()
            if(!user.id){
                notExistsOrError(userDB, 'Usuario ja cadastrado')
            }
        
        }
        catch(msg){
            res.status(400).send(msg)
        }
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){
            app.db('users')
                .update(user)
                .where({id: user.id})
                .then(_ => res.status(400).send())
                .catch(err => res.status(500).send(err))
        }
        else{ 
            app.db('users')
                .insert(user)
                .then(_ => res.status(201).send())
                .catch(err => res.status(500).send(err))
        }
    }

    return {save}
}