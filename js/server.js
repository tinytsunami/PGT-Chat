var log = function(message){console.log(message);}
var app    = require('http').createServer(),
	io 	   = require('socket.io').listen(app);
//var mysqli = require('./mysqli.js');
app.listen(30000);
var id 		= 0;
var messages= [];
var members = [];
var preSave = [];

io.sockets.on('connection',function(socket){
	socket.on('login',function(member){
		member.id = socket.id;
		members.push(member);
		socket.emit('updataSelfId',member.id);
		socket.emit('createMessage',messages);
		socket.emit('updateMemberBox',members);
		socket.broadcast.emit('updateMemberBox',members);
	});
	socket.on('logout',function(member){
		removeMember(member.id);
		socket.emit('updateMemberBox',members);
		socket.broadcast.emit('updateMemberBox',members);
	});
	socket.on('message',function(message){
		if (messages.length>100){
			preSave.push(messages.shift());
			preSaveToDb();
		};
		message.id = id + 1;
		id += 1;
		message.date = new Date();
		messages.push(message);
		socket.emit('updateMessage',message);
		socket.broadcast.emit('updateMessage',message);
	});
	socket.on('window_blur',function(member){
		for (var i = members.length - 1; i >= 0; i--) {
			if (members[i].id == member.id) {
				members[i].ip = members[i].ip + '（瀏覽分頁中……）';	
			};
		};
		socket.emit('updateMemberBox',members);
		socket.broadcast.emit('updateMemberBox',members);
	});
	socket.on('window_foucs',function(member){
		for (var i = members.length - 1; i >= 0; i--) {
			if (members[i].id == member.id) {
				members[i].ip = member.ip;
			};
		};
		socket.emit('updateMemberBox',members);
		socket.broadcast.emit('updateMemberBox',members);
	});
});
var removeMember = function(mId){
	for (var i = members.length - 1; i >= 0; i--) {
		if (members[i].id == mId) {
			members.splice(i,1);
		};
	};
}
/*
var preSaveToDb = function(){
	if (preSave.length>100) {
		for (var i = 0; i <= preSave.length - 1; i++) {
			var sql = "INSERT INTO `chat`(`id`, `name`, `message`, `time`) ";
			sql += "VALUES ('','"+preSave[i].nickname+"','"+preSave[i].message+"','"+preSave[i].date+"');";
			mysqli.run(sql);
		};
		preSave = [];
	};
}
*/