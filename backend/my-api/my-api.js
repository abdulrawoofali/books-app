const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");
var cors = require('cors')
const [FICTION,NON_FICTION] = ['/genre/5fbea89251bf6a0a58c4eb97','/genre/5fbea79c0886d155e495dc3e'];

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

mongoose
  .connect("mongodb://localhost/bookStore")
  .then(() => {
    console.log("connected to mongodb.....");
  })
  .catch((err) => {
    console.log("error while connecting mongodb..,", err);
  });
const defaultApiUrl = "/api/v1";
const URL = "url";

// multer
const multer = require("multer");
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});


/// models
const Book = require("../models/book/book");
const Author = require("../models/author/author");
const Genre = require("../models/genre/genre");
const Image = require("../models/Images/image");
const author = require("../models/author/author");
const port = 8080;



// image get request
app.get("/api/v1/avatar/:id", (req, res) => {
  //console.log(req.params);
  const imageId = req.params.id;
  Image.findById(imageId).then((image) => res.send(image));
});

app.get("/api/v1/avatar", (req, res) => {
    //console.log(req.params);
    const imageId = req.params.id;
    Image.find().then((images) => res.send(images));
  });

// image post request....
app.post("/api/v1/avatar", upload.single("image"), (req, res) => {
  console.log(req);

  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    image: {
      data: fs.readFileSync(
        path.join(__dirname + "/upload/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };

  const newImage = new Image(obj);
  newImage.save().then((image) => res.send(image));
});

app.put(`${defaultApiUrl}}/avatar/:id`,async (req,res)=>{
    const filter ={_id:req.params.id};
    const updetedImage = await Image.findOneAndUpdate(filter,req.body,{new:true,upsert:true})
    res.send(updetedImage);

})

// author api's

// author post
app.post(
  `${defaultApiUrl}/author`,
  upload.single("image"),
  async (req, res) => {
    let avatar_url = null;

    const req_body = JSON.parse(req.body.request);

    if (req.file !== null) {
      var obj = {
        name:req_body.first_name+" "+req_body.family_name,
        image_belongs_to: 'author',
        image: {
          data: fs.readFileSync(
            path.join(__dirname + "/upload/" + req.file.filename)
          ),
          contentType: "image/png",
        },
      };
      const newImage = new Image(obj);
      console.log(newImage);
      avatar_url = await newImage.save().then((image) => {console.log(image);return image.get(URL)});
    }

    const newAuthor = new Author({
      avatar_url,
      ...req_body,
    });
    newAuthor.save().then((author) => res.send(author));
  }
);

// get all authors
app.get(`${defaultApiUrl}/author`, (req, res) => {
  Author.find().then((authors) => res.send(authors));
});

// get author by id

app.get(`${defaultApiUrl}/author/:id`, (req, res) => {
  Author.findById(req.params.id).then((author) => {res.send({author})});
});

app.put(`${defaultApiUrl}}/author/:id`,async (req,res)=>{
    const filter ={_id:req.params.id};
    const updetedAuthor = await Author.findOneAndUpdate(filter,req.body,{new:true,upsert:true})
    res.send(updetedAuthor);

})




app.post(`${defaultApiUrl}/genre`, upload.single("image"),async(req,res)=>{
    console.log(req.file);
    try{
    let avatar_url = null;
   
    //console.log(req.body.request);
    const req_body = JSON.parse(req.body.request);
    if (req.file !== null) {
      var obj = {
        name:  req_body.name,
        image_belongs_to: 'genre', 
        image: {
          data: fs.readFileSync(
            path.join(__dirname + "/upload/" + req.file.filename)
          ),
          contentType: "image/png",
        },
      };
      const newImage = new Image(obj);
      console.log(newImage);
      avatar_url = await newImage.save().then((image) => {console.log(image);return image.get(URL)});
    }
    new Genre({avatar_url,...req_body}).save().then(genere => res.send(genere))

}catch(err){
    console.log(err);
}}
);

app.put(`${defaultApiUrl}/genre/:id`,async (req,res)=>{
    const filter ={_id:req.params.id};
    const updetedGenre = await Genre.findOneAndUpdate(filter,req.body,{new:true,upsert:true})
    res.send(updetedGenre);

})


app.get(`${defaultApiUrl}/genre`,(req,res)=>{
    Genre.find().then(genres => res.send(genres));
})

app.get(`${defaultApiUrl}/genre/:id`, (req, res) => {
    Genre.findById(req.params.id).then((genres) => res.send(genres));
})

// book Apis

// book post
app.post(`${defaultApiUrl}/book`,upload.single('image'),async(req,res)=>{
    try{
       
    let avatar_url = null;
   
    //console.log(req.body.request);
    const req_body = JSON.parse(req.body.request);
    let author_url = await Author.findById(req_body.author).then(author => author.url);
    let genre_url = await Genre.findById(req_body.genre).then(genre => genre.url);
    if (req.file!== null) {
      var obj = {
        name:  req_body.title,
        image_belongs_to: 'book', 
        image: {
          data: fs.readFileSync(
            path.join(__dirname + "/upload/" + req.file.filename)
          ),
          contentType: "image/png",
        },
      };
      const newImage = new Image(obj);
      //console.log(newImage);
      avatar_url = await newImage.save().then((image) => {return image.get(URL)});
    }



   //console.log({avatar_url,author_url,genre_url,...req_body});
    //const newBook = 
    new Book({avatar_url,author_url,genre_url,...req_body}).save().then(book => res.send(book),console.log("success book uploaded"))

}catch(err){
    res.status(500).send("somthing is wrong with your data ... please re verify ...");
    
}}
);

app.put(`${defaultApiUrl}/book/:id`,async (req,res)=>{
    const filter ={_id:req.params.id};
    const newBook = await Book.findOneAndUpdate(filter,req.body,{new:true,upsert:true})
    res.send(newBook);

})

app.get(`${defaultApiUrl}/book`, (req,res)=>{
    Book.find().then((books) => res.send(books));
    //const book = await Book.find().skip(0).limit(10).then(books => books);

})

app.get(`${defaultApiUrl}/book/:id`,(req,res)=>{
    Book.findById(req.params.id).then((book) => res.send(book));
})

app.get(`${defaultApiUrl}/books/trending`,(req,res)=>{
    Book.find({ likes: { $gt: 100 } }).then(books =>res.send(books)).catch(err => res.send(err));
})

app.get(`${defaultApiUrl}/books/fiction`,(req,res)=>{
    Book.find({
        genre_url:NON_FICTION
    }).then(books =>res.send(books)).catch(err => res.send(err));
})


app.get(`${defaultApiUrl}/books/nonfiction`,(req,res)=>{
    Book.find({
        genre_url:FICTION
    }).then(books =>res.send(books)).catch(err => res.send(err));
})




//{"title":"hehvhcacv","author":"5fbea35779ae494e20bc0f24","summary":"cjhbcuchu","isbn":"cvsvcyvsuc","genre":"5fbea79c0886d155e495dc3e"}


app.listen(8080, () => console.log("am listening on port 8080"));
