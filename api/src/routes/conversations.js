const express = require('express');
const ConversationsService = require('./../services/conversations');

const conversationsApi = (app) => {
  const router = express.Router();
  app.use('/api/conversations/', router);

  const conversationsService = new ConversationsService();

  router.get('/', async (req, res, next) => {
    console.log(req);
    res.status(200).json({data: "hello"});
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const doc = await conversationsService.getConversation(id);
      res.status(200).json(doc);
    } catch (error) {
      next(error);
    }
  });

}

module.exports = conversationsApi;