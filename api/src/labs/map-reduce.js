const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');
const ViewQuery = couchbase.ViewQuery;

const viewQuery = ViewQuery.from('conversations','count_rates');

bucket.query(viewQuery, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result[0].value);
  }
});

// function (doc, meta) {
//   if (doc.type === 'conversation') {
//     emit(doc.id, doc.rate);
//   }
// }

// function (keys, values, rereduce) {
//   if (rereduce) {
//     return values.reduce(function(count, value){
//       return count + value
//     }, 0);
//   } else {
//     return values.reduce(function(count, value){
//       return count + value
//     }, 0);
//   }
// }