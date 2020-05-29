const { Cluster, N1qlQuery } = require('couchbase');
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


}

module.exports = CouchbaseLib;