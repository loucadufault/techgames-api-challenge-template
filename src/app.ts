import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import models, { server } from "./server";

import { Application, Request, Response } from "express";
import { PassThrough } from "stream";
import { ObjectID } from "mongodb";

dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

if (port == "") {
    // tslint:disable-next-line:no-console
    console.log("Missing environment variables for configuration (check .env.example and create a .env)")
    process.exit(1);
}

app.route("/status").get(function(req, res)
{
    res.json({"status": "Up"});
});

app.route("/articles").post(async (req, res) =>
{   const title = req.body.title;
    const subtitle = req.body.subtitle;
    const body = req.body.body;
    const author = req.body.author;

    if (title && subtitle && body && author) {
        console.log(req.body.title);
        
        const article = new models.Article({
            _id: "asdasdas",
            title : title,
            subtitle : subtitle,
            body : body,
            author : author
          });

        await article.save(function(err, doc) {
            console.log(doc);
        });
        
        res.json({
            "_id" : article._id,
            "title" : title,
            "subtitle" : subtitle,
            "body" : body,
            "author" : author
          })
    } else {
        res.status(400).send("One of the parameters is missing from the body.");
    }
});

app.use((req: Request, res: Response) => {
    res.status(500).send({
        status: 500,
        message: "Not Implemented"
    });
});

export { app, port }
