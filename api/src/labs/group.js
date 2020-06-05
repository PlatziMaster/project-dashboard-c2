const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');
const ViewQuery = couchbase.ViewQuery;

const start = [2019, 1, 1];
const end = [2019, 2, 28];

const viewQuery = ViewQuery.from('conversations','count_rates')
.range(start, end)
.group_level(2)

bucket.query(viewQuery, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log('range');
    console.log(result);
  }
});

// const viewQuery2 = ViewQuery.from('conversations','count_rates')
// .group_level(3);

// bucket.query(viewQuery2, (error, result) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('sin range');
//     console.log(result[0].value);
//   }
// });