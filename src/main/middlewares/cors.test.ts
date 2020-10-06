import request from 'supertest'
import app from '../config/app'

describe('Cors Middleware',() => {
  test('Should enable CORS',async () => {
    app.get('/test_cors',(req,res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-contrtol-allow-origin','*')
      .expect('access-contrtol-allow-methods','*')
      .expect('access-contrtol-allow-headers','*')
  })
})
