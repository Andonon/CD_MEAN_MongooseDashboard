const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(path.join(__dirname + '/static/')));
app.set('views', path.join(__dirname + '/views/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.Promise = global.Promise;

var OwlSchema = new mongoose.Schema({
    name: String, 
    description: String,
    }, { timestamps: true });

mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl');

app.get('/', function(req, res){
    //functionality: Displays all of the owl
    console.log("In ROOT route")
    Owl.find({}, function(err, owls){
        if(err){
            console.log("There was an error with DB...")
            console.log("Errors: ", errors);
            res.render('index');
        }
        else {
            console.log("Query found owls: ", owls)
            res.render('index', {owls: owls});
        }
    });
});
app.get('/owl/new', function(req, res){
    //functionality: Displays a form for making a new owl.
    console.log("In NEW OWL route")
    res.render('newowl');
});

app.post('/owl', function(req, res){
    console.log("In owl PROCESSING route")
    //functionality:  Should be the action attribute for the form in the above route (GET '/owls/new').
    console.log(req.body);
    const owl = new Owl({name: req.body.owlname, description: req.body.owldescription});
    owl.save(function(err){
        if(err) {
            console.log('There was an error...');
        } else { 
            console.log('successfully added quote...');
            res.redirect('/');
        }
    });
});
app.get('/owl/:id', function(req, res){
    console.log("In OWLID route")
    console.log(req.params)
    //functionality: Displays information about one owl.
    Owl.findOne({"_id": req.params.id}, function(err, owl){
        if(err){
            console.log("There was an error with DB...")
            console.log("Errors: ", err);
            res.redirect('/');
        }
        else {
            console.log("Query found owl: ", owl)
            res.render('oneowl', {owl: owl});
        }
    });
});
app.get('/owl/edit/:id', function(req, res){
    console.log("In owl EDIT route, displaying edit form")
    //functionality: Should show a form to edit an existing owl.
        Owl.findOne({"_id": req.params.id}, function(err, owledit){
        if(err){
            console.log("There was an error with DB...")
            console.log("Errors: ", err);
            res.redirect('/');
        }
        else {
            console.log("Query found owledit: ", owledit)
            res.render('editowl', {owledit: owledit});
        }
    });
});
app.post('/owl/:id', function(req, res){
    console.log("In POST OWL EDIT route")
    //functionality: Should be the action attribute for the form in the above route (GET '/owls/edit/:id').
    Owl.findOne({"_id": req.params.id}, function(err, owl){
        if(err){
            console.log("There was an error with DB...")
            console.log("Errors: ", err);
            res.redirect('/');
        }
        else {
            console.log(req.body)
            owl.name = req.body.editname;
            owl.description = req.body.editdescription;
            owl.save(function (err) {
                if(err){
                console.log("There was an error with DB...")
                console.log("Errors: ", err);
                res.redirect('/');
            } else {
                console.log("Query found owl: ", owl)
                res.render('oneowl', {owl: owl});
                }
            });
        }
    });
});
app.get('/owl/destroy/:id', function(req, res){
    //functionality: Should delete the owl from the database by ID.
    console.log("In DESTROY route")
    Owl.remove({"_id": req.params.id}, function(err, owl){
        if(err){
            console.log("There was an error with DB...")
            console.log("Errors: ", err);
            res.redirect('/');
        }
        res.redirect('/');      
    });
});


port = 8000;

app.listen(port, function () {
    console.log("Listen on port", port);
})