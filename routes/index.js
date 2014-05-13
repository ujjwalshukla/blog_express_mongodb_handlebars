var express = require('express');
var Post = require('./../models/post.js');
var commentSchema = require('./../models/comments.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	Post.find(function(err, posts) {
		if (err) console.log(err);
		res.render('index', { title: 'Blog', posts: posts });

	})
});

router.get('/:slug', function(req, res) {
	Post.findOne({slug: req.params.slug}, function(err, post) {
		if (err) console.log(err);

		res.render('post', {post: post});
	})
});

router.post('/:slug/comments', function(req, res) {
	console.log(req.params)
	var comments = new commentSchema({
		body: req.body.comment_body
	})
	Post.update({slug: req.params.slug}, {$push: {comments: comments}}, function() {
		res.redirect('/'+req.params.slug);
	})

});

module.exports = router;
