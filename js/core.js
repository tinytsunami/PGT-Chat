var chat = chat || {};

chat.message = function(id,member,date,message,additional){
	this.id			= id;
	this.nickname	= member.nickname;
	this.account	= member.account;
	this.date		= date;
	this.text	    = message;
	this.additional = additional;
}

chat.member = function(ip,account,nickname,fc,type,message){
	this.id 	  = 0;
	this.account  = account;
	this.nickname = nickname;
	this.ip		  = ip;
	this.fc 	  = fc;
	this.type     = type;
	this.message  = message;
}

chat.messages = [];
chat.members  = [];

var member = new chat.member(mIp,mAccount,mNickname,'0000-0000-0000','會員','兇兇可怕');