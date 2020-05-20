const request = require('supertest');

const app = require('../index');

describe('playground', () => {
  it('can get playground', (done) => {
    request(app)
      .get('/graphql')
      .set('Accept', 'text/html')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
