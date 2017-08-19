Router = express.Router();
Router.use(bodyParser.json());
Router.route('/')

.all(function(req,res,next){
	res.writeHead(200, {"Content-Type": "text/plain"});
	next();
})
.get(function(req,res,next){
	res.end("niks is hier!")
})
.post(function(req,res,next){
	cmd.get(req.body.command, function(err, data, stderr){
            console.log('the current working dir is : ',data)
            res.end("succes, " + data);
        }
    );
	
})
.delete(function(req,res,next){
	res.end("niks is hier");
});