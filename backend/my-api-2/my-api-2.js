const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");
var cors = require("cors");
const [FICTION, NON_FICTION] = [
  "/genre/5fbea89251bf6a0a58c4eb97",
  "/genre/5fbea79c0886d155e495dc3e",
];

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/bookStore-2")
  .then(() => {
    console.log("connected to mongodb.....");
  })
  .catch((err) => {
    console.log("error while connecting mongodb..,", err);
  });

const defaultApiUrl = "/api/v2";
const URL = "url";
/// models
const Book2 = require("./models/book");
const Author2 = require("./models/author");
const Genre2 = require("./models/genre");
// const Image = require("./models/image");
const author = require("./models/author");
const book = require("./models/book");
const { exec } = require("child_process");
const port = 5000;

app.post(`${defaultApiUrl}/author`, (req, res) => {
  new Author2(req.body)
    .save()
    .then((author) => res.send(author))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/authors`, (req, res) => {
  console.log("cbcb");
  Author2.find()
    .then((author) => res.send(author))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/author/:id`, (req, res) => {
  Author2.findById(req.params.id)
    .then((author) => res.send(author))
    .catch((err) => res.status(500).send(err));
});

app.put(`${defaultApiUrl}/author/:id`, (req, res) => {
  const filter = { _id: req.params.id };
  Author2.findOneAndUpdate(filter, req.body, { new: true, upsert: true })
    .then((author) => res.send(author))
    .catch((err) => res.status(500).send(err));
});

app.post(`${defaultApiUrl}/genre`, (req, res) => {
  new Genre2(req.body)
    .save()
    .then((genre) => res.send(genre))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/genres`, (req, res) => {
  Genre2.find()
    .then((genres) => res.send(genres))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/genre/:id`, (req, res) => {
  Genre2.findById(req.params.id)
    .then((genre) => res.send(genre))
    .catch((err) => res.status(500).send(err));
});

app.put(`${defaultApiUrl}/genre/:id`, (req, res) => {
  const filter = { _id: req.params.id };
  Genre2.findOneAndUpdate(filter, req.body, { new: true, upsert: true })
    .then((genre) => res.send(genre))
    .catch((err) => res.status(500).send(err));
});

app.post(`${defaultApiUrl}/book`, (req, res) => {
  new Book2(req.body)
    .save()
    .then((book) => res.send(book))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/book/:id`, (req, res) => {
  Book2.findById(req.params.id)
    .then((book) => res.send(book))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/books`, (req, res) => {
  //console.log("book..");
  Book2.find()
    .then((books) => res.send(books))
    .catch((err) => res.status(500).send(err));
});

app.put(`${defaultApiUrl}/book/:id`, (req, res) => {
  const filter = { _id: req.params.id };
  Book2.findOneAndUpdate(filter, req.body, { new: true, upsert: true })
    .then((book) => res.send(book))
    .catch((err) => res.status(500).send(err));
});

app.get(`${defaultApiUrl}/books/trending`, (req, res) => {
  Book2.aggregate([
    { $sort: { likes: -1 } },
    { $limit: 10 },
    {
      $lookup: {
        from: "author2",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    { $unwind: "$author" },
    {
      $lookup: {
        from: "genre2",
        localField: "genre",
        foreignField: "_id",
        as: "genre",
      },
    },
    { $unwind: "$genre" },
  ])
    .exec()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get(`${defaultApiUrl}/books/by_genre`, (req, res) => {
  Genre2.aggregate([
    {
      $lookup: {
        from: "book2",
        localField: "_id",
        foreignField: "genre",
        as: "books",
      },
    },
    {
      $project: {
        books_count: { $size: { $ifNull: ["$books", []] } },
        genre: "$$ROOT",
      },
    },

    {
      $sort: { books_count: -1 },
    },

    {
      $project: {
        genre: 1,
        _id: 0,
      },
    },
  ])
    .exec()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.get(`/api/v2/authorAndBooks/:id`, (req, res) => {
  console.log(req.params.id);
  Author2.aggregate([
    { $match:{_id: mongoose.Types.ObjectId(req.params.id)} },
    {
        $lookup: {
          from: "book2",
          localField: "_id",
          foreignField: "author",
          as: "books",
        },
      },

]).exec().then(data => res.send(data)).catch(data => res.send(data));
});
app.listen(port, () => console.log(`listening at port ${port}`));
