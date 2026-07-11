const mongoose=require("mongoose");

const translationSchema=new mongoose.Schema({

userId:String,

sourceLanguage:String,

targetLanguage:String,

originalText:String,

translatedText:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.models.Translation || mongoose.model('Translation', translationSchema);