const request = require('supertest');

const app = require('../index');

describe('express', () => {
  it('can call root index', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('will return hello:world', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .then((response) => {
        expect(response.body).toEqual({ hello: 'world' });
        expect(response.body).toEqual({ hello: 'world' });
        done();
      });
  });
});
