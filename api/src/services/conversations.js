const CouchbaseLib = require('./../libs/couchbase');

class ConversationsService {

  constructor() {
    this.couchbase = new CouchbaseLib();
  }

  getConversation(conversationId) {
    return this.couchbase.getDoc(conversationId);
  }
}

module.exports = ConversationsService;