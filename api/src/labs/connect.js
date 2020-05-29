const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost:8081/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');

bucket.upsert("1111111", {
  id: "1111111",
  customer_id: "123",
  rate: 5,
  created_at: new Date().toISOString,
  type: "conversation",
}, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});

bucket.get("1111111", (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result.value);
  }
});