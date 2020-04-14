const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');
const N1qlQuery = couchbase.N1qlQuery;

const query = `
  SELECT conversation.*
  FROM platzi AS conversation
  WHERE conversation.type = 'conversation' AND conversation.rate >= 5
`;
const n1Query = N1qlQuery.fromString(query);

bucket.query(n1Query, [], (error, rows) => {
  if (error) {
    console.error(error);
  } else {
    console.log(rows);
  }
});