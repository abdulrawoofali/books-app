var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    objective:{type:String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre:{type: Schema.Types.ObjectId, ref: 'Genre'},
    avatar_url:{type:String},
    likes:{type:Number}
  }
);

// Virtual for book's URL
BookSchema
.virtual('url')
.get(function () {
  return '/book/' + this._id;
});

// BookSchema.virtual('avatar').get(function(){
//   return this.image;
// })

//Export model
module.exports = mongoose.model('Book2', BookSchema);

/* 

  {
    "title": ,
    "author": ,
    "summary": ,
    "isbn": ,
    "genre":,
    "avatar_url":"",
    likes: "100"
  }


*/