
const blogRepository = require('./../repositories/blog.respository')

const BlogController = {

    async list(req, res, next){
        const params = req.params

        const blogs = await blogRepository.list()
        console.log(blogs)
        res.send(blogs)
    },

}

module.exports = BlogController