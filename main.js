var mongoose = require("mongoose");
var userSchema = require('./schema.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos', {useMongoClient:true});

var User = mongoose.model('User', userSchema, "user2");
var user = new User({
    title:"It",
    author: "Stephen King",
    body:1338
});
//creacion
user.save((error, data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado"+data);
    process.exit(0);
});

//consulta
User.find({title:'It'}, function(error,data){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Resultado");
    console.log(data);
});
//actualizacion
User.update({_id: "5b45cf9229c7f433f3f3953c"}, {$set: {hidden:"true"}},function(error,data){
    if(error,data){
        console.log(error);
        process.exit(1);
    }
    console.log("update");
    console.log(data);
    process.exit(0);
}); 
//eliminacion
User.findByIdAndRemove({_id:'5b45cf9229c7f433f3f3953c'}, function(error,data){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log(data);
    process.exit(0);
});
