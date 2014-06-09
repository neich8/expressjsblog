var express = require('express');
var Post = require("../models/blog")

module.exports = function(app){

app.get('/', function(req, res){
		Post.find({}, function(err, posts){
		if(err) {
			console.log(err)
			res.render('index')
		}
		else {
			res.render('index', {posts: posts});
		}
})
});

app.post("/blog", function(req, res) {
	var post = new Post({ 
		title: req.body.title,
		content: req.body.title})
		post.save(function(err, post) {
			if(err) {
				console.log(err)
			}
			else {
				res.redirect("/")
			}
		})
})

app.post('/delete/:id', function(req, res) {
	Post.findByIdAndRemove(req.params.id, function(err, post){
		if(err) {
			console.log(err)
		}
		else {
			res.redirect('/')
		}
	})
})

app.get('/edit/:id', function(req,res){
	var id =  req.params.id
	Post.findById(id, function(err, post){
		if(err) {
			console.log(err)
		}
		else {
			console.log(post)
			res.render('edit', {post: post})
		}
	})
})

app.post("/edit/:id", function(req, res) {
	var title = req.body.title
	var content = req.body.post
	var id = req.params.id
	Post.findByIdAndUpdate(id, { title: title, content: content	}, function(err, user){
		if(err) {
			console.log(err)
		}
		else {

			res.redirect('/')
		}
	})
})
}



