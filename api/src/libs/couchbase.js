const { Cluster, N1qlQuery, ViewQuery } = require('couchbase');
const { config } = require('./../config/index');

const COUCHBASE_URI = `couchbase://${config.cdbHost}:${config.cdbPort}`;
console.log(COUCHBASE_URI);

class CouchbaseLib {

  constructor() {
    this.cluster = new Cluster(COUCHBASE_URI);
    this.cluster.authenticate(config.cdbUser, config.cdbPassword);
  }

  getBucket() {
    return this.cluster.openBucket(config.cdbBucketName);
  }

  getDoc(id) {
    return new Promise((resolve, reject) => {
      this.getBucket().get(id, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.value);
        }
      });
    });
  }

  runQuery(query) {
    return new Promise((resolve, reject) => {
      const n1Query = N1qlQuery.fromString(query);
      this.getBucket().query(n1Query, [], (error, rows) => {
        if (error) {
          reject(error);
        } else {
          resolve(rows);
        }
      });
    });
  }

  runView(viewQuery) {
    return new Promise((resolve, reject) => {
      this.getBucket().query(viewQuery, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }


}

module.exports = CouchbaseLib;