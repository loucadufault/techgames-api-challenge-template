import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const articleSchema = new mongoose.Schema({
    // _id: {
    //     type: String,
    //     unique: true,

    // },
    title: {
    type: String,
    unique: true,
    required: true
    },
    subtitle: {
        type: String,
        unique: false,
        required: true
    },
    body: {
        type: String, 
        unique: false,
        required: true
    }, 
    author: {
        type: String,
        unique: false,
        required: true
    }
});

const Article = mongoose.model('Article', articleSchema);
export default Article;