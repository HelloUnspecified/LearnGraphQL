const faker = require('faker');

const person = () => ({
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  profileImage: faker.internet.avatar(),
});

function create(num = 1) {
  const results = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < num; index++) {
    const newSession = {
      id: faker.random.uuid(),
      title: faker.lorem.words(),
      shortDescription: faker.lorem.sentence(),
      startingDateTime: faker.date.future(),
      host: person(),
      attendees: [person(), person(), person(), person(), person()],
    };

    results.push(newSession);
  }

  return results;
}

module.exports = create;
