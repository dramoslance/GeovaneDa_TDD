import * as request from 'supertest'
import app from '../config/app'

describe('Cors', () => {
  it('Should open cors', async () => {
    app.get('/cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
