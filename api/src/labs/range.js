const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');
const ViewQuery = couchbase.ViewQuery;

const start = [2019, 3, 4];
const end = [2019, 6, 4];

const viewQuery = ViewQuery.from('conversations','count_rates')
.range(start, end);

bucket.query(viewQuery, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result[0].value);
    console.log(result[0].value.sum / result[0].value.count);
  }
});