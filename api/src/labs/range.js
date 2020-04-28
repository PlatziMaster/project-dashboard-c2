const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');
const ViewQuery = couchbase.ViewQuery;

const viewQuery = ViewQuery.from('conversations','count_rates')
//.group_level(1)
//.range(startDateArray, endDateArray);;

bucket.query(viewQuery, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result[0].value);
  }
});