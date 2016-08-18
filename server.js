var http = require('http');
var url = require('url');
var score = [
	{
		 student_id : 11111,
		 Name : "Bruce Lee",
		 Score : 84
	},
	{
		student_id : 22222,
		 Name : "Jackie Chen",
		 Score : 93 
	},
	{
		student_id : 33333,
		 Name : "Jet Li",
		 Score : 88 
	}
];

function getMsg(msg) {
	if(msg==11111){
		return{
			student_id : score[0].student_id,
			Name : score[0].Name,
			Score : score[0].Score,
		}
	}else if(msg ==22222){
		return{ 
			student_id : score[1].student_id,
			Name : score[1].Name,
			Score : score[1].Score,
		}
	}else{
		return{
			error:500
		};
	}
};

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var info = new String(parsedUrl.query.student_id);
	var result = getMsg(info);
	
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end(JSON.stringify(result));
});

var port = process.env.PORT || 3000;
server.listen(port, function(){ 
	console.log('listening on *'+port);
});