const faker = require('faker');
const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('admin', 'admin123');
const bucket = cluster.openBucket('platzi');


for (let index = 0; index < 50; index++) {
  const newDoc = {
    id: faker.random.uuid(),
    customer_id: faker.random.number(12),
    rate: faker.random.number(6),
    created_at: faker.date.between('2019-01-01', '2019-12-31'),
    type: 'conversation'
  };
  bucket.upsert(newDoc.id, newDoc, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
}