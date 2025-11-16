const request = require('supertest')
const appUrl = 'http://localhost:3000'
test('guest create API returns 200', async ()=> {
  const res = await request(appUrl).post('/api/guest/create').send({name:'Test', mobile:'7777777777', table:1})
  expect([200,201]).toContain(res.status)
})
