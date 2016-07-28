var http = require('http')
var url = require('url')
var class = [ 
	{
		 "Course": "CS551",
		 "Homework":"1",
		 "Score":"84"
	},
	{
		 "Course": "CS551",
		 "Homework":"2",
		 "Score":"93"
	},
	{
		 "Course": "CS551",
		 "Homework":"3",
		 "Score":"88"
	},
	{
		 "Course": "CS557",
		 "Homework":"1",
		 "Score":"90"
	},
	{
		 "Course": "CS557",
		 "Homework":"2",
		 "Score":"85"
	}
]

function returnValue(class) {
	if(class=="cs551"){
		return{
				score1 : class[0].score,
				score2 : class[1].score,
				score3 : class[2].score
		}
	}else{
		return{ 
			score1 : class[3].score,
			score2 : class[4].score
		}
	}
}

var server = http.createServer(function (req, res) {
	var parsedUrl = url.parse(req.url, true)
	var class = new Date(parsedUrl.query.course_id)
	var result = returnValue(class)
	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(result))
	} else {
		res.writeHead(404)
		res.end()
	}
})

var port = process.env.PORT || 3000;
server.listen(port, function(){ 
	console.log('listening on *'+port);
});p
		