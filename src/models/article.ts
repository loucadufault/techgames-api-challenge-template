import mongoose from 'mongoose';
import { ObjectID } from 'mongodb';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: false,
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