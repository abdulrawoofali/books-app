var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    name:{type:String,required:true},
    desc:{type:String},
    image_belongs_to:{type:String,required:true},
    image: { 
        data: Buffer, 
        contentType: String ,
    }
})
ImageSchema.virtual('url').get(function(){
    return`/avatar/${this._id}`;
})

module.exports = mongoose.model('Image', ImageSchema);  