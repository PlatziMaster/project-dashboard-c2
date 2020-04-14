const couchbase = require('couchbase')
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');
const N1qlQuery = couchbase.N1qlQuery;

bucket.upsert(
  'user:king_arthur', {
    'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
  },
  function (err, result) {
    console.log(err);
    console.log(result);
  }
)

const query = N1qlQuery.fromString('SELECT * FROM bucketname WHERE $1 in interests LIMIT 1');

bucket.query(query, ['African Swallows'],
function (err, rows) {
  console.log(err);
  console.log("Got rows: %j", rows);
});