const Blog = require('./../models/blog.model')

const BlogRespository = {

    async list() {
        return await Blog.find({})
    },
    async findById(id) {
        return await Blog.findById(id)
    }

}
module.exports = BlogRespository