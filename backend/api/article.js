module.exports = app => {
    const limitPage = 10
    const get = async (req, res) => {

        const page = req.query.page || 1

        const result = await app.db('articles').count('id').first()
        const count = parseInt(result.count)
        
       app.db('articles').select('id', 'name', 'description').limit(limitPage).offset(page * limitPage - limitPage)
       .then(articles => res.json({ data: articles, count:count, limit:limitPage }))
       .catch(error => res.send(error))
    }
    return {get}
}