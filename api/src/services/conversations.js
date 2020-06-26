const CouchbaseLib = require('./../libs/couchbase');
const { ViewQuery } = require('couchbase');
const differenceInDays = require('date-fns/differenceInDays')

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

  async getStats(start, end) {
    const startArray = start.split('/').map(item => parseInt(item, 10));
    const endArray = end.split('/').map(item => parseInt(item, 10));
    const diff = differenceInDays(new Date(endArray), new Date(startArray));
    let conversationsByTime = [];
    if (diff < 30) {
      conversationsByTime = await this.getConversationsByDays(startArray, endArray);
    } else if (diff >= 30 && diff <= 365) {
      conversationsByTime = await this.getConversationsByMonths(startArray, endArray)
    } else {
      conversationsByTime = await this.getConversationsByYears(startArray, endArray)
    }
    return {
      conversationsByTime,
      countTotalRate: this.getCountRates(),
      countTotalRateByTime: []
    }
  }

  getCountRates() {
    // const viewQuery = ViewQuery.from('conversations','count_rates');
    return [];
  }

  async getConversationsByYears(start, end) {
    const viewQuery = ViewQuery.from('conversations','count_by_date')
    .group_level(1)
    .range(start, end);
    const docs = await this.couchbase.runView(viewQuery);
    return docs.map(item => {
      return {
        name: item.key.join('-'),
        value: item.value,
      }
    })
  }

  async getConversationsByMonths(start, end) {
    const viewQuery = ViewQuery.from('conversations','count_by_date')
    .group_level(2)
    .range(start, end);
    const docs = await this.couchbase.runView(viewQuery);
    return docs.map(item => {
      return {
        name: item.key.join('-'),
        value: item.value,
      }
    })
  }

  async getConversationsByDays(start, end) {
    const viewQuery = ViewQuery.from('conversations','count_by_date')
    .group_level(3)
    .range(start, end);
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