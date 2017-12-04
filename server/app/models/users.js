var mongoose = require('mongoose');

var schema = mongoose.Schema({
   nome : {
       type:String,
       required : true
   },
   idade : {
       type : Number,
       required : true
   },
   cargo : {
       type : String,
       required : true
   }
    
});

mongoose.model('Users', schema);