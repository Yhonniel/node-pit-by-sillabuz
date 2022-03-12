import mongoose from "mongoose";

const {Schema} = mongoose

// TABLA BLOG
// TABLA COMMENTS

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{body: String, date: Date}],
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})
module.exports = blogSchema