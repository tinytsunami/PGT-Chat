var log = function(message){console.log(message);}
var shift = false;
var socket = io('http://'+window.location.host+':30000');
socket.on('connect',function(){
	socket.emit('login',member);
});
window.onbeforeunload = function(){
	socket.emit('logout',member);
}
window.onfocus = function(){
	socket.emit('window_foucs',member);
}
window.onblur = function(){
	socket.emit('window_blur',member);
}
socket.on('disconnect',function(){
	socket.emit('logout',member);	
});
socket.on('updataSelfId',function(id){
	member.id = id;
});
socket.on('updateMemberBox',function(members){
	chat.members.splice(0,chat.members.length);
	for (var i = 0; i <= members.length - 1; i++) {
		chat.members.push(members[i]);
	};
	chat.arch.updateMember();
});
socket.on('createMessage',function(messages){
	for (var i = 0; i <= messages.length - 1; i++) {
		chat.messages.push(messages[i]);
		chat.arch.createMessage(messages[i]);
	};
});
socket.on('updateMessage',function(message){
	chat.messages.push(message);
	if (chat.messages>100) {
		chat.arch.removeOldMessage();
	};
	chat.arch.createMessage(message);
	var v1 = chat.arch.messages.scrollTop + chat.arch.messages.clientHeight,
		v2 = chat.arch.messages.scrollHeight,
		v3 = 200;
	if ((v2-v1)<v3) {
		chat.arch.messages.scrollTop = chat.arch.messages.scrollHeight;
	}
});
chat.post = function(){
	var text = chat.arch.post_message.value;
	var additional = {
		i : chat.arch.i,
		b : chat.arch.b,
		l : chat.arch.l,
		c : chat.arch.c
	}
	var message = new chat.message(0,member,0,text,additional);
	socket.emit('message',message);	
	setTimeout(function(){
		chat.arch.post_message.value = null;
	},0);
}
chat.arch.post_button.onclick   = function(){
	if (chat.arch.post_message.value.search(/\S/)>=0) {
		chat.post();
	};
}
chat.arch.post_message.onkeydown = function(event){
	if (event.keyCode == 16) {
		shift = true;
	};
	if (event.keyCode == 13 && shift == false) {
		if (chat.arch.post_message.value.search(/\S/)>=0) {
			chat.post();
		};
	};
}
chat.arch.post_message.onkeyup = function(event){
	if (event.keyCode == 16) {
		shift = false;
	};
}