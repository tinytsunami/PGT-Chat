<?php include 'member_data.php';?>
<!DOCTYPE html>
<html lang="tw">
<head>
	<meta charset="utf8">
	<meta http-equiv="content-type" content="text/html">
	<meta http-equiv="content-script-type" content="text/javascript">
	<meta http-equiv="content-style-type" content="text/css">
	<meta name="description" content="P.G.T.（Pokemon Gym Taiwan 神奇寶貝台灣道館）的聊天室。討論神奇寶貝戰鬥、比賽、以及平時交流的相關訊息。">
	<meta name="keyword" content="PGT,P.G.T.,P.G.T,神奇寶貝,台灣,戰鬥,道館,chat,gym,battle">
	<meta name="author" content="P.G.T.">
	<meta name="copyright" content="open source">
	<meta name="robots" content="none">
	<title>P.G.T. 約戰室</title>
	<link rel="shortcut icon" href="../image/pgt_icon.ico"/>
	<link rel="stylesheet" type="text/css" href="./css/chat.css">
	<link rel="stylesheet" type="text/css" href="./css/members_box.css">
	<link rel="stylesheet" type="text/css" href="./css/messages_box.css">
	<link rel="stylesheet" type="text/css" href="./css/image_block.css">
</head>
<body>
<header>
	<a href="../main">&lt; Back P.G.T. </a>
</header>
<div id="messages">
</div>
<div id="members">
</div>
<div id="post">
	<textarea id="post_message"></textarea>
	<button id="post_button">POST</button>
	<button id="image_button">IMAGE</button>
	<button id="hello_button">SAY HELLO !</button>
	<button id="u_button"><u>Underline</u></button>
	<button id="i_button"><i>Italic</i></button>
	<button id="b_button"><b>Bold</b></button>
	<button id="d_button"><del>Strikethrough</del></button>
	<button id="o_button"><span style="text-decoration: overline;">Overline</span></button>
	<span id="version">v1.0</span>
</div>
<div id="set">
	YOUR COLOR:　<input id="set_color" type="color"/>
</div>
<button id="shift_post">POST</button>
<button id="shift_set">SET</button>
<div id="image_block_mask">
	<div id="image_block">
		<form>
			
		</form>
	</div>
</div>
<script type="text/javascript">
	<?php
		if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
		 	$ip = $_SERVER['HTTP_CLIENT_IP'];
		}elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		}else{
			$ip = $_SERVER['REMOTE_ADDR'];
		}
	?>
	var mIp   	 = <?php echo '"'.$ip.'"'; ?>,
		mAccount = "anyone";
		mNickname= "羊羽";//prompt('您的暱稱？');
</script>
<script type="text/javascript" src="./js/core.js"></script>
<script type="text/javascript" src="./js/interface.js"></script>
<script type="text/javascript">
	var head    = document.getElementsByTagName('head')[0];
	var ip      = 'http://'+window.location.host+':30000/socket.io/socket.io.js';
	var socket  = document.createElement('script');
	socket.setAttribute('src',ip);
	socket.onload = function(){
	    var script_src = [
	    "./js/client.js"
	    ]
	    for (var i = 0; i <= script_src.length - 1; i++) {
	        var script = document.createElement('script');
	        script.setAttribute('src',script_src[i]);
	        script.onload = function(){}
	        head.appendChild(script);
	    };
	}
	head.appendChild(socket);
</script>
</body>
</html>