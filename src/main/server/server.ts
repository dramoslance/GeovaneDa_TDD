/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import app from '../config/app'

app.listen(process.env.PORT, () => {
  console.log(`server is working in Port: \x1b[32m%s\x1b[0m ${process.env.PORT}`)
})
