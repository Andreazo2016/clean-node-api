import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes',() => {
  test('Should return an account on sucess',async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'valid_name',
        email: 'valid_mail@email.com',
        password: 'valid_password',
        passwordConfirmation: 'valid_password'
      })
      .expect(200)
  })
})
