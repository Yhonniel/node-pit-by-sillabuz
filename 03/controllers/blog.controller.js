const blogRepository = require('./../repositories/blog.respository')
const responseResult = require('./../utils/response.util')
const httpStatusCodes = require('http-status-codes')



const BlogController = {

    async list(req, res, next) {

        try {
            // throw "Gato Malo"
            const blogs = await blogRepository.list()
            res.status(200).json(blogs)
        } catch (exept){
            res.status(500).send(exept)
        }

        // return responseResult.general(res, httpStatusCodes.OK, blogs)
    },
    async detail(req, res, next) {
        const {id} = req.params

        const blog = await blogRepository.findById(id)

        responseResult.general(res, httpStatusCodes.OK, blog)

    }

}

module.exports = BlogController