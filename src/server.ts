import { app, port } from "./app";
import mongoose from "mongoose";

import Article from "./models/article";

let dbUrl = "";

(process.env.DB_URL)
    ? dbUrl = process.env.DB_URL
    : dbUrl = "mongodb://mongo:27017/techgames-template";

mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
});

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
});



const server = app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});

const connectDb = () => {
    return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
};

const models = { Article, };

export { server };
export default models;