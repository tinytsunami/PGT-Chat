var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'mysql.lionfree.net',
	user : 'u592828928_pgt',
	password: 'pgtadmin',
	database: 'u592828928_pgt'
});
connection.connect();
exports.run = function(sql){
	connection.query(sql,function(err){});
}