var mysql = require('mysql'),
	q = require('q');

const _HOST = '127.0.0.1',
	_PORT = '',
	_USER = 'root',
	_PWD = '1234567890',
	_DB = 'dau_gia';

exports.load = function (sql) {
	var d = q.defer();

	var cn = mysql.createConnection({
		host: _HOST,
		port: _PORT,
		user: _USER,
		password: _PWD,
		database: _DB
	});

	cn.connect();
	cn.query(sql, function (error, rows, fields) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(rows);
		}

		cn.end();
	});

	return d.promise;
}

// exports.load = function(sql, fn) {

//     var cn = mysql.createConnection({
// 		host: _HOST,
// 		port: _PORT,
// 		user: _USER,
// 		password: _PWD,
// 		database: _DB
// 	});

// 	cn.connect();
// 	cn.query(sql, function (error, rows, fields) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			// console.log(rows);
// 			fn(rows);
// 		}

// 		cn.end();
// 	});
// }

exports.insert = function (sql) {
	var d = q.defer();
	
	var cn = mysql.createConnection({
		host: _HOST,
		port: _PORT,
		user: _USER,
		password: _PWD,
		database: _DB
	});

	cn.connect();
	cn.query(sql, function (error, value) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(value.insertId);
		}

		cn.end();
	});

	return d.promise;	
}

// exports.insert2 = function (sql, pd) {
// 	var d = q.defer();
	
// 	var cn = mysql.createConnection({
// 		host: _HOST,
// 		port: _PORT,
// 		user: _USER,
// 		password: _PWD,
// 		database: _DB
// 	});

// 	cn.connect();
// 	cn.query(sql,
// 		[
// 			pd.ProName,
// 			pd.TinyDes,
// 			pd.FullDes,
// 			pd.Price,
// 			pd.CatID,
// 			pd.Quantity
// 		], 
// 		function (error, value) {
// 		if (error) {
// 			d.reject(error);
// 		} else {
// 			d.resolve(value.insertId);
// 		}

// 		cn.end();
// 	});

// 	return d.promise;	
// }

exports.delete = function (sql) {
	var d = q.defer();
	
	var cn = mysql.createConnection({
		host: _HOST,
		port: _PORT,
		user: _USER,
		password: _PWD,
		database: _DB
	});

	cn.connect();
	cn.query(sql, function (error, value) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(value.affectedRows);
		}

		cn.end();
	});

	return d.promise;	
}

exports.update = function (sql) {
	var d = q.defer();
	
	var cn = mysql.createConnection({
		host: _HOST,
		port: _PORT,
		user: _USER,
		password: _PWD,
		database: _DB
	});

	cn.connect();
	cn.query(sql, function (error, value) {
		if (error) {
			d.reject(error);
		} else {
			d.resolve(value.affectedRows);
			
		}

		cn.end();
	});

	return d.promise;	
}