// const admin = require('./api/admin')

module.exports = app => {
//    app.post('/signup', app.api.user.save)
//    app.post('/signin', app.api.auth.signin)
//    app.post('/valitadeToken', app.api.auth. validateToken)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)
        

    // app.route('/users/:id')
    //     .put(app.api.user.save)
    //     .get(app.api.user.getById)

    // app.route('/categories')
    //     .get(app.api.category.get)
    //     .post(app.api.category.save)

    // app.route('/categories/:id')
    //     .get(app.api.category.getById)
    //     .put(app.api.category.save)
        // .delete(admin(app.api.category.remove))
    
}