const articlesRouter = require('express').Router();
const {getArticle, getArticles, patchArticle} = require('../controllers/articles')
const {getCommentsByArticle, postComment} = require("../controllers/comments")

articlesRouter
  .route('/')
  .get(getArticles)

articlesRouter
  .route('/:article_id')
  .get(getArticle)
  .patch(patchArticle);

articlesRouter
  .route('/:article_id/comments')
  .get(getCommentsByArticle)
  .post(postComment);

module.exports = articlesRouter;