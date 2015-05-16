chat.arch = {
	version      	: document.getElementById('version'),
	post_message 	: document.getElementById('post_message'),
	post_button  	: document.getElementById('post_button'),
	image_button 	: document.getElementById('image_button'),
	hello_button	: document.getElementById('hello_button'),
	b_button 		: document.getElementById('b_button'),
	i_button 		: document.getElementById('i_button'),
	u_button 		: document.getElementById('u_button'),
	d_button 		: document.getElementById('d_button'),
	o_button 		: document.getElementById('o_button'),
	messages 	  	: document.getElementById('messages'),
	members 	  	: document.getElementById('members'),
	set 		  	: document.getElementById('set'),
	post 		  	: document.getElementById('post'),
	shift_post   	: document.getElementById('shift_post'),
	shift_set 	  	: document.getElementById('shift_set'),
	set_color 	  	: document.getElementById('set_color'),
	b 				: false,
	i 				: false,
	l 				: 0,
	c 				: "#333333"
}
chat.arch.shift_post.onclick = function(){
	chat.arch.post.style.display 	   = 'block';
	chat.arch.set.style.display  	   = 'none';
	chat.arch.shift_post.style.color   = '#555';
	chat.arch.shift_set.style.color    = '#CCC';
}
chat.arch.shift_set.onclick = function(){
	chat.arch.set.style.display   	   = 'block';
	chat.arch.post.style.display  	   = 'none';
	chat.arch.shift_set.style.color    = '#555';
	chat.arch.shift_post.style.color   = '#CCC';
}
chat.arch.b_button.onclick = function(){
	chat.arch.b = !chat.arch.b;
	if (chat.arch.b) {
		chat.arch.post_message.style.fontWeight = 'bold';
		chat.arch.b_button.style.background = '#CCC';
	}else{
		chat.arch.post_message.style.fontWeight = 'normal';
		chat.arch.b_button.style.background = '#FFF';
	}
}
chat.arch.i_button.onclick = function(){
	chat.arch.i = !chat.arch.i;
	if (chat.arch.i) {
		chat.arch.post_message.style.fontStyle = 'italic';
		chat.arch.i_button.style.background = '#CCC';
	}else{
		chat.arch.post_message.style.fontStyle = 'normal';
		chat.arch.i_button.style.background = '#FFF';
	}
}
chat.arch.set_color.onchange = function(){
	chat.arch.c = this.value.toString();
	chat.arch.post_message.style.color = this.value.toString();
}
chat.arch.checkDecortion = function(){
	if (chat.arch.l==0) {
		chat.arch.post_message.style.textDecoration = 'none';
		chat.arch.u_button.style.background = '#FFF';
		chat.arch.d_button.style.background = '#FFF';
		chat.arch.o_button.style.background = '#FFF';
	}
	if (chat.arch.l==1) {
		chat.arch.post_message.style.textDecoration = 'underline';
		chat.arch.u_button.style.background = '#CCC';
		chat.arch.d_button.style.background = '#FFF';
		chat.arch.o_button.style.background = '#FFF';
	}
	if (chat.arch.l==2) {
		chat.arch.post_message.style.textDecoration = 'line-through';
		chat.arch.u_button.style.background = '#FFF';
		chat.arch.d_button.style.background = '#CCC';
		chat.arch.o_button.style.background = '#FFF';
	}
	if (chat.arch.l==3) {
		chat.arch.post_message.style.textDecoration = 'overline';
		chat.arch.u_button.style.background = '#FFF';
		chat.arch.d_button.style.background = '#FFF';
		chat.arch.o_button.style.background = '#CCC';
	}
}
chat.arch.u_button.onclick = function(){
	if (chat.arch.l == 1) {
		chat.arch.l = 0;
	}else{
		chat.arch.l = 1;
	}
	chat.arch.checkDecortion();
}
chat.arch.d_button.onclick = function(){
	if (chat.arch.l == 2) {
		chat.arch.l = 0;
	}else{
		chat.arch.l = 2;
	}
	chat.arch.checkDecortion();
}
chat.arch.o_button.onclick = function(){
	if (chat.arch.l == 3) {
		chat.arch.l = 0;
	}else{
		chat.arch.l = 3;
	}
	chat.arch.checkDecortion();
}
chat.arch.hello_button.onclick = function(){
	chat.arch.post_message.value += "安，戰嗎？";
	chat.post();
}
chat.arch.createMessage = function(message){
	var b = document.createElement('div');
	var h = document.createElement('div');
	var i = document.createElement('span');
	var n = document.createElement('span');
	var d = document.createElement('span');
	var a = document.createElement('img');
	var m = document.createElement('pre');
	b.setAttribute('class','message_box');
	h.setAttribute('class','message_box_header');
	i.setAttribute('class','message_box_id');
	n.setAttribute('class','message_box_nickname');
	d.setAttribute('class','message_box_date');
	m.setAttribute('class','message_box_message');
	a.setAttribute('class','message_box_image');
	a.setAttribute('src','./image/'+message.account+'.png');
	a.setAttribute('width','80px');
	a.setAttribute('hieght','80px');
	if (message.additional.b == true) {
		m.style.fontWeight = 'bold';
	};
	if (message.additional.i == true) {
		m.style.fontStyle = 'italic';
	};
	switch (message.additional.l){
		case 0:
			break;
		case 1:
			m.style.textDecoration = 'underline';
			break;
		case 2:
			m.style.textDecoration = 'line-through';
			break;
		case 3:
			m.style.textDecoration = 'overline';
			break;
	}
	m.style.color = message.additional.c;
	b.appendChild(a);
	b.appendChild(h);
	b.appendChild(m);
	h.appendChild(i);
	h.appendChild(n);
	h.appendChild(d);
	i.innerHTML = message.id;
	n.innerHTML = message.nickname;
	d.innerHTML = message.date;
	m.innerHTML = message.text;
	chat.arch.messages.appendChild(b);
}
chat.arch.createMember = function(member){
	var b = document.createElement('div');
	var n = document.createElement('span');
	var h = document.createElement('span');
	var d = document.createElement('span');
	var i = document.createElement('div');
	var f = document.createElement('div');
	var t = document.createElement('div');
	var m = document.createElement('div');
	b.setAttribute('class','members_box');
	n.setAttribute('class','members_box_nickname');
	h.setAttribute('class','members_box_header');
	d.setAttribute('class','members_box_data');
	i.setAttribute('class','members_box_ip');
	f.setAttribute('class','members_box_fc');
	t.setAttribute('class','members_box_type');
	m.setAttribute('class','members_box_message');
	b.appendChild(h);
	b.appendChild(m);
	h.appendChild(n);
	h.appendChild(d);
	d.appendChild(i);
	d.appendChild(f);
	d.appendChild(t);
	n.innerHTML = member.nickname;
	i.innerHTML = 'IP－'+member.ip;
	f.innerHTML = 'FC－'+member.fc;
	t.innerHTML = member.type;
	m.innerHTML = member.message;
	chat.arch.members.appendChild(b);
}
chat.arch.removeOldMessage = function(){
	chat.messages.shift();
	var node = chat.arch.messages.firstChild;
	chat.arch.messages.removeChild(node);
}
chat.arch.updateMember = function(){
	while(node = chat.arch.members.childNodes[0]){
		chat.arch.members.removeChild(node);
	}
	for (var i = 0; i <= chat.members.length - 1; i++) {
		chat.arch.createMember(chat.members[i]);
	};
}