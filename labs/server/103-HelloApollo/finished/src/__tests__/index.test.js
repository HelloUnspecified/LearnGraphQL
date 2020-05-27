const request = require('supertest');
const app = require('../index');

describe('playground', () => {
  it('can get playground', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'text/html')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe('graphql server', () => {
  it('get raw query', (done) => {
    const rawPostBody = { query: 'query {hello}' };
    request(app)
      .get(`/?query=${rawPostBody.query}`)
      .set('Accept', 'application/json')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
          data: {
            hello: 'world',
          },
        });
        done();
      });
  });
});
