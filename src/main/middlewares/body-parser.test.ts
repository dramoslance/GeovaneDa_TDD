import * as request from 'supertest'
import app from '../config/app'

describe('Middlewares', () => {
  it('Should Body-Parser', async () => {
    app.post('/body-parser', (req, res) => {
      return res.send(req.body)
    })

    await request(app)
      .post('/body-parser')
      .send({ name: 'Deiby' })
      .expect({ name: 'Deiby' })
  })
})
