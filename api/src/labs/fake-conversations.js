const faker = require('faker');

const createConversations = async () => {
  const docs = [];
  for (let index = 0; index < 50; index++) {
    docs.push({
      id: faker.random.uuid(),
      customer_id: faker.random.number(12),
      rate: faker.random.number(6),
      created_at: faker.date.between('2019-01-01', '2019-12-31'),
      type: 'conversation'
    });
  }
  return docs;
}