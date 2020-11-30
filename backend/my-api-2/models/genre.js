var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name : {type:String, required:true,minlength:3,maxlength:100},
    link:{type:String},
    Details:{type:String},
    avatar_url:{type:String}
});


GenreSchema.virtual('url').get(function(){
    return `/genre/${this._id}`;
})

GenreSchema.virtual('genreId').get(function(){
    return `${this._id}`;
})

module.exports = mongoose.model('Genre2', GenreSchema);

/*
{
    "name" : ,
    "link":,
    "Details":,
    "avatar_url":
}

 */
