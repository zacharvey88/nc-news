const articlesRouter = require('express').Router();
const {getArticle, getArticles, patchArticle, postArticle, deleteArticle} = require('../controllers/articles')
const {getCommentsByArticle, postComment} = require("../controllers/comments")

articlesRouter
  .route('/')
  .get(getArticles)
  .post(postArticle)

articlesRouter
  .route('/:article_id')
  .get(getArticle)
  .patch(patchArticle)
  .delete(deleteArticle)

articlesRouter
  .route('/:article_id/comments')
  .get(getCommentsByArticle)
  .post(postComment)

module.exports = articlesRouter;