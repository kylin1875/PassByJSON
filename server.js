var http = require('http');
var url = require('url');
var scoreeee = [
	{
		 Course : "CS551",
		 Homework : 1,
		 Score : 84
	},
	{
		 Course : "CS551",
		 Homework : 2,
		 Score : 93
	},
	{
		 Course : "CS551",
		 Homework : 3,
		 Score : 88
	},
	{
		 Course : "CS557",
		 Homework : 1,
		 Score : 90
	},
	{
		 Course : "CS557",
		 Homework : 2,
		 Score : 85
	}
];

function getMsg(msg) {
	if(msg=="CS551"){
		return{
			Course : scoreeee[0].Course,
			Homework : scoreeee[0].Homework,
			Score : scoreeee[0].Score,

			Course : scoreeee[1].Course,
			Homework : scoreeee[1].Homework,
			Score : scoreeee[1].Score,

			Course : scoreeee[2].Course,
			Homework : scoreeee[2].Homework,
			Score : scoreeee[2].Score
		}
	}else if(msg =="CS557"){
		return{ 
			Course : scoreeee[3].Course,
			Homework : scoreeee[3].Homework,
			Score : scoreeee[3].Score,

			Course : scoreeee[4].Course,
			Homework : scoreeee[4].Homework,
			Score : scoreeee[4].Score
		}
	}else{
		return{
			error:500
		};
	}
};

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var info = new String(parsedUrl.query.Course);
	var result = getMsg(info);
	/*if (result) {

	}*//* else {
		res.writeHead(404);
		res.end();
	}*/
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end(JSON.stringify(result));
});

var port = process.env.PORT || 3000;
server.listen(port, function(){ 
	console.log('listening on *'+port);
});
		