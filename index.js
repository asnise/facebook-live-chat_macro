var EventSource = require("eventsource");
var robot = require("robotjs");
var videoID = "2509292526045406"
var token = "EAALNyZAM14asBALvE3JcAmTebhRH9bq0Up0FDMvKYgCY4ZAVQvnJzBFIsu5pvhCTsXBe82Krqj7Tnt5yzFmuZCBIjHw3LtuE7L2bK0z9LrkyqLNm67wqIEVxe3Dgn15GlgkttRRyypwc7kZBO4yigoppQnxtrqiz6NqfD0CKws6AlLn3rOXVZAZBpUYR1EK7ycXDjd6cFm0TUZAmGGvEx4gFkMZCZAWsR7jKpf2s7F5htcc6iPu9ZCTiWb"
var url = `https://streaming-graph.facebook.com/${videoID}/live_comments?access_token=${token}&comment_rate=one_per_two_seconds&fields=from{name,id},message`;
var source = new EventSource(url);

console.log(`Run...`);

source.onmessage = function(event){
	var json = JSON.parse(event.data);
	console.log("User Comments : " + json.message);
	
	if(json.message.toLowerCase() == "a")
	{
		robot.typeString("l");
	}
		if(json.message.toLowerCase() == "b")
	{
		robot.typeString("k");
	}
	
	if(json.message.toLowerCase() == "start")
	{
		robot.keyTap("enter");
	}
		if(json.message.toLowerCase() == "select")
	{
		robot.keyTap("escape");
	}
	
	
	
		if(json.message.toLowerCase() == "up")
	{
		robot.keyTap("up");
	}
		if(json.message.toLowerCase() == "down")
	{
		robot.keyTap("down");
	}
		if(json.message.toLowerCase() == "right")
	{
		robot.keyTap("right");
	}
			if(json.message.toLowerCase() == "left")
	{
		robot.keyTap("left");
	}
};