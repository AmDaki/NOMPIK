var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('register_stage'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/resgister')
var db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/sign_up",(req, res) => {
    var nom= req.body.nom
    var prenom=req.body.prenom
    var email=req.body.email
    var numero=req.body.numero
    var genre=req.body.genre
    var domaine=req.body.domaine
    var universite=req.body.universite
    var fichier=req.body.fichier

    var data={
        "nom":nom,
        "prenom":prenom,
        "email":email,
        "numero":numero,
        "genre":genre,
        "domaine":domaine,
        "universite":universite,
        "fichier":fichier
    }
    db.collection('register_user').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect('signup_successful.html')
})

app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('register.html')
}).listen(3000);

console.log("Listening on port 3000")