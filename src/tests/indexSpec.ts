import supertest from 'supertest';
import app from '../index';


const req = supertest(app);

// testing the main endpoint
describe('test for endpoints', () => {
  it('should get endpoint', async (done) => {
    const res = await req.get('/api/images?filename=fjord&width=200&height=200');
    expect(res.status).toBe(200);
    done();
  });
});
