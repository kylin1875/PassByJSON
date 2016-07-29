var http = require('http');
var url = require('url');
var class = [ 
	{
		 Course: "CS551",
		 Homework:"1",
		 Score:"84"
	},
	{
		 Course: "CS551",
		 Homework:"2",
		 Score:"93"
	},
	{
		 Course: "CS551",
		 Homework:"3",
		 Score:"88"
	},
	{
		 Course: "CS557",
		 Homework:"1",
		 Score:"90"
	},
	{
		 Course: "CS557",
		 Homework:"2",
		 Score:"85"
	}
];

function getMsg(info) {
	if(class=="cs551"){
		return{
			course : class[0].Course,
			homework : class[0].Homework,
			score1 : class[0].Score,
			homework : class[1].Homework,
			score2 : class[1].Score,
			homework : class[2].Homework,
			score3 : class[2].Score
		}
	}else if(class =="cs557"){
		return{ 
			course : class[3].Course,
			homework : class[3].Homework,
			score1 : class[3].Score,
			homework : class[4].Homework,
			score2 : class[4].Score
		}
	}else{
		return{
			error:500
		};
	}
};

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true);
	var info = new Date(parsedUrl.query.course_id);
	var result;
	result = getMsg(info);
	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

var port = process.env.PORT || 3000;
server.listen(port, function(){ 
	console.log('listening on *'+port);
});
		