const {selectTopics} = require('../models/topics')

function getTopics (req,res,next) {
  return selectTopics().then((topics)=>{
    res.status(200).send({topics})
  })
  .catch((err)=>{
    next(err)
  })
}


module.exports = {getTopics}