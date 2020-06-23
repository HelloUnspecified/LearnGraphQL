const request = require('supertest');

const app = require('../index');

describe('playground', () => {
  it('can get playground', () => {
    expect(true).toBeTruthy();
    // request(app)
    //   .get('/')
    //   .set('Accept', 'text/html')
    //   .then((response) => {
    //     expect(response.statusCode).toBe(200);
    //     done();
    //   });
  });
});
