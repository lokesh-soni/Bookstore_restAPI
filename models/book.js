var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
	book_no:{
		type: String,
		required: true
	},
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},

	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get Books

module.exports.getBooks = function(callback,limit){
	Book.find(callback).limit(limit);
}
//add Books
module.exports.getBookById = function(id, callback){
	Book.findById(id, callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback){
	var query = {_id: id};
	var update = {
		book_no: book.book_no,
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = function(id, callback){
	var query = {_id: id};
	Book.remove(query, callback);
}
