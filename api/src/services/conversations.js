const CouchbaseLib = require('./../libs/couchbase');
const { ViewQuery } = require('couchbase');

class ConversationsService {

  constructor() {
    this.couchbase = new CouchbaseLib();
  }

  getConversation(conversationId) {
    return this.couchbase.getDoc(conversationId);
  }

  getAllConversations() {
    const query = `
      SELECT conversation.*
      FROM platzi AS conversation
      WHERE conversation.type = 'conversation'
    `;
    return this.couchbase.runQuery(query);
  }

  async getStats() {
    return {
      conversationsByTime: await this.getConversationsByTime(),
      countTotalRate: this.getCountRates(),
      countTotalRateByTime: []
    }
  }

  getCountRates() {
    // const viewQuery = ViewQuery.from('conversations','count_rates');
    return [];
  }

  async getConversationsByTime() {
    const viewQuery = ViewQuery.from('conversations','count_by_date')
    .group_level(2);
    const docs = await this.couchbase.runView(viewQuery);
    return docs.map(item => {
      return {
        name: item.key.join('-'),
        value: item.value,
      }
    })
  }
}

module.exports = ConversationsService;